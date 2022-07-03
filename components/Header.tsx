export default function Header(): JSX.Element {
    return (
        <header className="flex bg-red-800 text-white font-bold h-12 items-end  py-1">
            <h1 className="mr-auto px-2 text-3xl">Biblioteka</h1>
            {a('/', 'Knygos')}
            {a('/authors', 'Autoriai')}
            {a('/genres', 'Žanrai')}
        </header>
    )
}

const a = (href: string, label: string) => 
    <a className="px-2 hover:underline" href={href}>{label}</a>