export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={`w-full rounded-md p-2 shadow-md ${props.className ?? ''}`} />
  )
}