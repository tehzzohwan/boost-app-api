
const praduct = {
  name: "sam",
  title: "honkey",
  tit: 4,
  bam: ''
}

data = [
        {
            "category": "smartphones"
        },
        {
            "category": "smartphones"
        },
        {
            "category": "smartphones"
        },
        {
            "category": "smartphones"
        },
        {
            "category": "smartphones"
        },
        {
            "category": "laptops"
        },
        {
            "category": "laptops"
        },
        {
            "category": "laptops"
        },
        {
            "category": "laptops"
        },
        {
            "category": "laptops"
        },
        {
            "category": "fragrances"
        },
        {
            "category": "fragrances"
        },
        {
            "category": "fragrances"
        },
        {
            "category": "fragrances"
        },
        {
            "category": "fragrances"
        },
        {
            "category": "skincare"
        },
        {
            "category": "skincare"
        },
        {
            "category": "skincare"
        },
        {
            "category": "skincare"
        },
        {
            "category": "skincare"
        },
        {
            "category": "groceries"
        },
        {
            "category": "groceries"
        },
        {
            "category": "groceries"
        },
        {
            "category": "groceries"
        },
        {
            "category": "groceries"
        },
        {
            "category": "home-decoration"
        },
        {
            "category": "home-decoration"
        },
        {
            "category": "home-decoration"
        },
        {
            "category": "home-decoration"
        },
        {
            "category": "home-decoration"
        }
    ]

    
// const  checkProductValidity = (product) => {
  
// }

// checkProductValidity(praduct);

// console.log(praduct.bam.length);


// const hasEmptyValue  = (obj) => {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);
//   const value = values.some((val) => String(val) === '');
//   if (value) {
//     return "empty value detected";
//   } else {
//     return '';
//   }
// };

// const checkType = (obj) => {
//     for (const [key, value] of Object.entries(obj)) {
//       if (typeof key === typeof value) {
//         return true;
//       }
//     }
//     return false;
// };

const exampleObj = {
  name: "John",
  age: 30,
  email: "",
  address: "123 Street",
};

console.log(hasEmptyValue(exampleObj));
console.log(checkType(exampleObj));

// console.log(Object.values(praduct));