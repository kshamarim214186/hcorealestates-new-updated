import DOMPurify from 'dompurify';

export default function TextComponent({ itemObj }) {
   return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(itemObj) }} />;
}