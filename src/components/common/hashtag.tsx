interface HashtagProps {
  text: string
}
function Hashtag({text}: HashtagProps) {
  return <span className="pr-[4px] text-[color:var(--hashtag)]">#{text}</span>
}

export default Hashtag
