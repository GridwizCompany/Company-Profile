// components/berita-detail.tsx
interface BeritaDetailProps {
  title: string;
  date: string;
  content: string;
  image: string;
}

export default function BeritaDetail({
  title,
  date,
  content,
  image,
}: BeritaDetailProps) {
  return (
    <section className="bg-gray-950 text-white min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center">
            <h1 className="text-4xl font-extrabold text-center">{title}</h1>
          </div>
        </div>

        <p className="text-gray-400 mt-4">{date}</p>
        <div className="mt-6 text-lg leading-relaxed whitespace-pre-line">
          {content}
        </div>
      </div>
    </section>
  );
}
