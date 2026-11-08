import Replies from './Replies'
import VoteBar from './VoteBar'

export default function Comment({ comment }) {
  const { author, time, text, likes, replies } = comment

  return (
    <article className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3">
      <div className="flex flex-col items-center">
        <span className="size-9 shrink-0 rounded-full bg-brand" aria-hidden="true" />
        {replies.length > 0 && <span className="w-0 flex-1 border-l border-dashed border-ink/60" />}
      </div>

      <div className="max-w-3xl pb-1">
        <p className="flex items-center gap-2 pt-1.5 text-sm">
          {author}
          <span className="text-ink-soft">•</span>
          <span className="text-xs text-ink-soft">{time}</span>
        </p>
        <p className="pt-3 text-xs leading-relaxed">{text}</p>
        <VoteBar likes={likes} />
      </div>

      {replies.length > 0 && <Replies replies={replies} />}
    </article>
  )
}
