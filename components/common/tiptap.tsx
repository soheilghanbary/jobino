import Bold from '@tiptap/extension-bold';
import Link from '@tiptap/extension-link';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { BoldIcon, Link2, UnderlineIcon } from 'lucide-react';
import { useCallback } from 'react';
import { Button } from '../ui/button';

type TiptapProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Tiptap = ({ value, onChange }: TiptapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Text,
      Paragraph,
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      onChange(content);
    },
  });

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run();
  }, [editor]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-1">
        <Button
          type="button"
          size={'icon'}
          className="size-8"
          variant={editor?.isActive('bold') ? 'secondary' : 'outline'}
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          <BoldIcon className="size-3.5" />
        </Button>
        <Button
          type="button"
          size={'icon'}
          className="size-8"
          variant={editor?.isActive('underline') ? 'secondary' : 'outline'}
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon className="size-3.5" />
        </Button>
        <Button
          type="button"
          size={'icon'}
          className="size-8"
          variant={editor?.isActive('link') ? 'secondary' : 'outline'}
          onClick={setLink}
        >
          <Link2 className="size-3.5" />
        </Button>
      </div>
      <EditorContent editor={editor} className="editor" />
    </>
  );
};
