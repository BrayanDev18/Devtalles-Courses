export default function Page({ params }: { params: { podcastId: string } }) {
  return <p className='text-white-1'>My Podcast: {params.podcastId}</p>
}
