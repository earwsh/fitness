"use client";

import dynamic from "next/dynamic";
import { useState, useRef, useMemo, useEffect } from "react";
import { Image as ImageIcon, Sparkles } from "lucide-react";

// Dynamically import Jodit to prevent SSR window/document undefined issues in Next.js
const JoditEditor = dynamic(() => import("jodit-react"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-80 bg-[#161616] border border-[#252525] rounded flex items-center justify-center text-xs text-[#64748b]">
      در حال بارگذاری ادیتور پیشرفته Jodit...
    </div>
  )
});

interface JoditArticleEditorProps {
  value: string;
  onChange: (content: string) => void;
  onOpenMediaPickerForEditor: () => void;
  insertedImageUrl?: string | null;
  onClearInsertedImage?: () => void;
}

export default function JoditArticleEditor({
  value,
  onChange,
  onOpenMediaPickerForEditor,
  insertedImageUrl,
  onClearInsertedImage,
}: JoditArticleEditorProps) {
  const editorRef = useRef<any>(null);

  // When an image is picked from Media Library, insert it into Jodit
  useEffect(() => {
    if (insertedImageUrl && editorRef.current) {
      const imgHtml = `<p style="text-align: center;"><img src="${insertedImageUrl}" alt="تصویر مقاله آکادمی ناظری" style="max-width: 100%; border-radius: 8px; margin: 12px 0;" /></p><p></p>`;
      if (editorRef.current.selection) {
        editorRef.current.selection.insertHTML(imgHtml);
      } else {
        onChange(value + imgHtml);
      }
      if (onClearInsertedImage) {
        onClearInsertedImage();
      }
    }
  }, [insertedImageUrl, onClearInsertedImage, onChange, value]);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "متن و بدنه کامل مقاله را اینجا بنویسید (عناوین، پاراگراف‌ها، نکات تمرینی و تصاویر)...",
      direction: "rtl" as const,
      language: "fa",
      theme: "dark",
      minHeight: 480,
      height: 520,
      toolbarButtonSize: "middle" as const,
      buttons: [
        "source",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "superscript",
        "subscript",
        "|",
        "ul",
        "ol",
        "|",
        "outdent",
        "indent",
        "|",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "|",
        "image",
        "video",
        "table",
        "link",
        "|",
        "align",
        "undo",
        "redo",
        "|",
        "hr",
        "eraser",
        "copyformat",
        "|",
        "symbol",
        "fullsize",
        "preview",
        "print",
      ],
      uploader: {
        insertImageAsBase64URI: true,
      },
      style: {
        background: "#131313",
        color: "#e5e2e1",
        fontFamily: "inherit",
        fontSize: "14px",
      },
      toolbarAdaptive: false,
    }),
    []
  );

  return (
    <div className="space-y-2">
      {/* Top Media Quick Inject Button */}
      <div className="flex items-center justify-between bg-[#1e1e1e] p-2.5 rounded-t border border-b-0 border-[#252525]">
        <span className="text-xs font-bold text-[#e5e2e1] flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#E86826]" />
          <span>ویرایشگر پیشرفته متنی و چندرسانه‌ای Jodit</span>
        </span>

        <button
          type="button"
          onClick={onOpenMediaPickerForEditor}
          className="px-3 py-1.5 rounded bg-[#E86826] hover:bg-[#ef7a3c] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>درج تصویر از کتابخانه رسانه‌ها (Media Picker)</span>
        </button>
      </div>

      <div className="jodit-dark-wrapper rounded-b overflow-hidden border border-[#252525]">
        <JoditEditor
          ref={editorRef}
          value={value}
          config={config}
          onBlur={(newContent) => onChange(newContent)}
          onChange={(newContent) => {}}
        />
      </div>
    </div>
  );
}
