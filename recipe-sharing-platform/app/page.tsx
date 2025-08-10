import Image from 'next/image'
import Header from './components/Header'

export default function HomePage() {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta with eggs, cheese, and pancetta",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      cookTime: "20 min",
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      description: "Creamy and flavorful Indian curry with tender chicken",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      cookTime: "45 min",
      difficulty: "Medium"
    },
    {
      id: 3,
      title: "Caesar Salad",
      description: "Fresh romaine lettuce with classic Caesar dressing",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      cookTime: "15 min",
      difficulty: "Easy"
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      description: "Soft and chewy cookies with chocolate chips",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
      cookTime: "25 min",
      difficulty: "Easy"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Amazing Recipes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Share your favorite dishes and explore culinary delights from around the world
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Cooking
          </button>
        </div>
      </section>

      {/* Recipe Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Recipes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src={recipe.image} 
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {recipe.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>⏱ {recipe.cookTime}</span>
                    <span> {recipe.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}