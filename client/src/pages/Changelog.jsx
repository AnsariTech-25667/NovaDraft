export default function Changelog() {
  const items = [
    { date: '2025-09-15', title: 'Rebrand to NovaDraft', body: 'New brand, palette, meta tags, and footer.' },
    { date: '2025-09-12', title: 'History sidebar', body: 'Restore previous generations.' },
    { date: '2025-09-10', title: 'PDF summarizer', body: 'Drop in a PDF, get key points.' }
  ];
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Changelog</h1>
      <ul className="space-y-6">
        {items.map(i => (
          <li key={i.date} className="border rounded-xl p-4">
            <div className="text-sm text-slate-500">{i.date}</div>
            <div className="text-lg font-medium">{i.title}</div>
            <p className="text-slate-700">{i.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
