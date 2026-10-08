import React from 'react'

const Body = () => {
    const produtos = [
        {
            id: 1,
            nome: 'Carrinho de Controle Remoto',
            preco: 'R$ 89,90',
            imagem: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=500&q=80',
        },
        {
            id: 2,
            nome: 'Urso de Pelúcia',
            preco: 'R$ 59,90',
            imagem: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=500&q=80',
        },
        {
            id: 3,
            nome: 'Blocos de Montar',
            preco: 'R$ 74,90',
            imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80',
        },
        {
            id: 4,
            nome: 'Boneca Infantil',
            preco: 'R$ 99,90',
            imagem: 'https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=500&q=80',
        },
    ]

    return (
        <main className="bg-gray-50">
            {/* Banner principal */}
            <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-16 text-white">
                <div className="mx-auto max-w-7xl text-center">
                    <h1 className="text-4xl font-bold md:text-6xl">
                        Diversão para toda a criançada! 🎈
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Encontre brinquedos incríveis para transformar cada momento
                        em uma nova aventura.
                    </p>

                    <button className="mt-8 rounded-full bg-yellow-400 px-8 py-3 font-bold text-gray-900 transition hover:bg-yellow-300">
                        Comprar agora
                    </button>
                </div>
            </section>

            {/* Categorias */}
            <section className="mx-auto max-w-7xl px-6 py-12">
                <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
                    Encontre seu brinquedo favorito 🎁
                </h2>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                        { nome: 'Bonecas', emoji: '🧸', cor: 'bg-pink-100' },
                        { nome: 'Carrinhos', emoji: '🚗', cor: 'bg-blue-100' },
                        { nome: 'Pelúcias', emoji: '🐻', cor: 'bg-yellow-100' },
                        { nome: 'Jogos', emoji: '🎲', cor: 'bg-green-100' },
                    ].map((categoria) => (
                        <div
                            key={categoria.nome}
                            className={`${categoria.cor} cursor-pointer rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:shadow-lg`}
                        >
                            <div className="text-5xl">{categoria.emoji}</div>
                            <h3 className="mt-3 font-bold text-gray-800">
                                {categoria.nome}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Produtos */}
            <section className="mx-auto max-w-7xl px-6 pb-16">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Mais vendidos ⭐
                    </h2>

                    <button className="font-semibold text-purple-600 hover:text-purple-800">
                        Ver todos →
                    </button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {produtos.map((produto) => (
                        <div
                            key={produto.id}
                            className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <img
                                src={produto.imagem}
                                alt={produto.nome}
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-800">
                                    {produto.nome}
                                </h3>

                                <p className="mt-2 text-2xl font-bold text-purple-600">
                                    {produto.preco}
                                </p>

                                <button className="mt-4 w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700">
                                    Adicionar ao carrinho 🛒
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Chamada final */}
            <section className="bg-yellow-400 px-6 py-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                    A diversão está esperando por você! 🎉
                </h2>

                <p className="mt-3 text-gray-800">
                    Aproveite nossas ofertas especiais e encontre o presente perfeito.
                </p>
            </section>
        </main>
    )
}

export default Body