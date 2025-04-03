// Define a TypeScript interface for Category
interface Category {
  name: string,
  subcategories: Category[]
}

const categories: Category[] = [
  {
    name: 'category1',
    subcategories: [
      {
        name: 'category2',
        subcategories: []
      },
      {
        name: 'category3',
        subcategories: [
          {
            name: 'category4',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    name: 'category5',
    subcategories: []
  }
]

// TO-DO: Implement this function
const getCategoryPath = (categories: Category[], categoryName: string): string | null => {

  for (const category of categories) {
    let child

    if (category.name === categoryName) {
      return `/${category.name}`
    }

    if (category.subcategories && (child = getCategoryPath(category.subcategories, categoryName))) {
      return `/${category.name}${child}`
    }
  }

  return null
}


// OUTPUT SAMPLES
console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // should output: '/category5'
