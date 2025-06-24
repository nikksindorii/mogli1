const products = {
    1: {
        name: "HB Pencil #1",
        category: "Writing",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "HB grade, wooden body, pack of 10. Ideal for school and professional use.",
        icon: "pencil-alt",
       image: "images/pencil_img.jpg",
        specs: [
            "Material: Premium wood casing",
            "Lead Grade: HB",
            "Pack Size: 10 pencils",
            "Break-resistant lead",
            "Smooth writing performance",
            "Lightweight and ergonomic"
        ]
    },
    2: {
        name: "Eraser #1",
        category: "Correction",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Soft rubber, dust-free eraser. Gentle on paper, strong on marks.",
        icon: "eraser",
        specs: [
            "Material: Soft rubber",
            "Dust-free formula",
            "Non-abrasive surface",
            "Ideal for graphite pencils",
            "Compact design",
            "Pack of 2"
        ]
    },
      3: {
    name: "Sharpener #1",
    category: "Sharpeners",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "Single blade, plastic body",
    icon: "cut",
    specs: [
      "Premium quality",
      "Best for everyday use",
      "Trusted by schools and offices"
    ]
  },
  4: {
    name: "12-Color Crayon Set #1",
    category: "Art",
    bulk: 10,
    retail: 20,
    online: 25,
    description: "Non-toxic, oil-based colors",
    icon: "palette",
    image: "images/crayon.jpg",
    specs: [
      "Premium quality",
      "Best for everyday use",
      "Trusted by schools and offices"
    ]
  },
  5: {
    name: "A4 Drawing Book #1",
    category: "Art",
    bulk: 20,
    retail: 35,
    online: 45,
    description: "40 pages, white drawing sheets",
    icon: "book",
    specs: [
      "Premium quality",
      "Best for everyday use",
      "Trusted by schools and offices"
    ]
  },
  6: {
    name: "Water Bottle (Kids) #1",
    category: "Accessories",
    bulk: 35,
    retail: 70,
    online: 85,
    description: "Plastic, cartoon print, 500ml",
    icon: "wine-bottle",
    specs: [
      "Premium quality",
      "Best for everyday use",
      "Trusted by schools and offices"
    ]
  },
  7: {
    name: "Kids School Bag #1",
    category: "Bags",
    bulk: 180,
    retail: 250,
    online: 300,
    description: "3 compartments, soft padded, cartoon themed",
    icon: "school",
    specs: [
      "Premium quality",
      "Best for everyday use",
      "Trusted by schools and offices"
    ]
  },
  8: {
    name: "Geometry Box #1",
    category: "Math Tools",
    bulk: 30,
    retail: 50,
    online: 65,
    description: "Compass, scale, protractor, divider",
    icon: "shapes",
    specs: [
      "Premium quality",
      "Best for everyday use",
      "Trusted by schools and offices"
    ]
  },
  9: {
    name: "Coloring Book #1",
    category: "Art",
    bulk: 25,
    retail: 40,
    online: 50,
    description: "20 activity pages, for age 4-10",
    icon: "paint-brush",
    specs: [
      "Premium quality",
      "Best for everyday use",
      "Trusted by schools and offices"
    ]
  },
  10: {
    name: "Pencil Box #1",
    category: "Storage",
    bulk: 20,
    retail: 40,
    online: 55,
    description: "Double compartment, magnetic lock",
    icon: "box",
    specs: [
      "Premium quality",
      "Best for everyday use",
      "Trusted by schools and offices"
    ]
  },
  11: {
    name: "HB Pencil #2",
    category: "Writing",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "HB grade, wooden body, pack of 10",
    icon: "pencil-alt",
    specs: [
      "Premium quality",
      "Best for everyday use",
      "Trusted by schools and offices"
    ]
  },
  12: {
    name: "Eraser #2",
    category: "Correction",
    bulk: 1,
    retail: 3,
    online: 4,
    description: "Soft rubber, dust-free",
    icon: "eraser",
    specs: [
      "Premium quality",
      "Best for everyday use",
      "Trusted by schools and offices"
    ]
  },
  13: {
    name: "Sharpener #2",
    category: "Sharpeners",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "Single blade, plastic body",
    icon: "cut",
    specs: [
      "Premium quality",
      "Best for everyday use",
      "Trusted by schools and offices"
    ]
  },
  
  14: {
    name: "12-Color Crayon Set #2",
    category: "Art",
    bulk: 10,
    retail: 20,
    online: 25,
    description: "Non-toxic, oil-based crayons for bright and smooth coloring. Ideal for kids’ art projects.",
    icon: "palette",
    specs: [
      "12 vibrant colors",
      "Oil-based crayons",
      "Non-toxic and child-safe",
      "Smooth application",
      "Reusable storage box"
    ]
  },
  15: {
    name: "A4 Drawing Book #2",
    category: "Drawing",
    bulk: 20,
    retail: 35,
    online: 45,
    description: "40-page white drawing sheet book perfect for sketching and coloring.",
    icon: "book",
    specs: [
      "Size: A4",
      "40 white drawing pages",
      "Staple-bound",
      "Ideal for pencil and crayon art",
      "Acid-free sheets"
    ]
  },
  16: {
    name: "Water Bottle (Kids) #2",
    category: "School",
    bulk: 35,
    retail: 70,
    online: 85,
    description: "500ml cartoon-themed water bottle. Durable and kid-friendly.",
    icon: "tint",
    specs: [
      "Capacity: 500ml",
      "BPA-free plastic",
      "Cartoon print design",
      "Flip-top lid",
      "Leak-proof seal"
    ]
  },
  17: {
    name: "Kids School Bag #2",
    category: "School",
    bulk: 180,
    retail: 250,
    online: 300,
    description: "3-compartment cartoon-themed school bag with soft padded straps.",
    icon: "backpack",
    specs: [
      "3 main compartments",
      "Cartoon design print",
      "Soft padded straps",
      "Water-resistant material",
      "Side bottle pockets"
    ]
  },
  18: {
    name: "Geometry Box #2",
    category: "Stationery",
    bulk: 30,
    retail: 50,
    online: 65,
    description: "Complete geometry set including compass, protractor, divider and scale.",
    icon: "ruler-combined",
    specs: [
      "Compass and divider",
      "Protractor and scale",
      "Durable plastic box",
      "Ideal for school use",
      "Metal tips for precision"
    ]
  },
  19: {
    name: "Coloring Book #2",
    category: "Art",
    bulk: 25,
    retail: 40,
    online: 50,
    description: "20 activity pages designed for children aged 4–10.",
    icon: "book-open",
    specs: [
      "20 fun coloring pages",
      "Thick quality paper",
      "Educational themes",
      "Designed for ages 4–10",
      "Crayon and pencil friendly"
    ]
  },
  20: {
    name: "Pencil Box #2",
    category: "Stationery",
    bulk: 20,
    retail: 40,
    online: 55,
    description: "Double-compartment pencil box with magnetic lock for secure storage.",
    icon: "box",
    specs: [
      "Double compartments",
      "Magnetic lock mechanism",
      "Compact and durable",
      "Vibrant design",
      "Spacious interior"
    ]
  },
  21: {
    name: "HB Pencil #3",
    category: "Writing",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "HB grade, wooden body, pack of 10. Ideal for everyday writing.",
    icon: "pencil-alt",
    specs: [
      "Material: Premium wood casing",
      "Lead Grade: HB (Medium)",
      "Pack Size: 10 pencils",
      "Eco-friendly materials",
      "Smooth writing experience"
    ]
  },
  22: {
    name: "Eraser #3",
    category: "Correction",
    bulk: 1,
    retail: 3,
    online: 4,
    description: "Soft rubber eraser that removes pencil marks without smudging.",
    icon: "eraser",
    specs: [
      "Material: Soft rubber",
      "Dust-free formula",
      "Precise erasing",
      "Non-abrasive",
      "Pack of 5"
    ]
  },
  23: {
    name: "Sharpener #3",
    category: "Stationery",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "Durable single-blade sharpener with a compact plastic body.",
    icon: "bolt",
    specs: [
      "Single blade",
      "Plastic body",
      "Compact and lightweight",
      "Safe for children",
      "Sharpens standard pencils"
    ]
  },
    24: {
    name: "12-Color Crayon Set #3",
    category: "Art",
    bulk: 10,
    retail: 20,
    online: 25,
    description: "Non-toxic, oil-based crayons that glide smoothly and deliver vivid color. Great for all ages.",
    icon: "palette",
    specs: [
      "Set of 12 vibrant colors",
      "Non-toxic and child-safe",
      "Oil-based smooth texture",
      "Easy grip for kids",
      "Reusable storage pack"
    ]
  },
  25: {
    name: "A4 Drawing Book #3",
    category: "Drawing",
    bulk: 20,
    retail: 35,
    online: 45,
    description: "White, smooth pages ideal for sketching and coloring. Staple-bound and easy to carry.",
    icon: "book",
    specs: [
      "A4 size format",
      "40 high-quality pages",
      "Thick sheets for all mediums",
      "Staple binding",
      "Suitable for school use"
    ]
  },
  26: {
    name: "Water Bottle (Kids) #3",
    category: "School",
    bulk: 35,
    retail: 70,
    online: 85,
    description: "Sturdy 500ml cartoon-themed water bottle with leak-proof cap and flip lid.",
    icon: "tint",
    specs: [
      "500ml capacity",
      "Leak-proof cap",
      "Flip-top lid",
      "Cartoon print",
      "Safe BPA-free material"
    ]
  },
  27: {
    name: "Kids School Bag #3",
    category: "School",
    bulk: 180,
    retail: 250,
    online: 300,
    description: "Cartoon-themed school bag with 3 compartments and soft straps for comfort.",
    icon: "backpack",
    specs: [
      "3 zippered compartments",
      "Soft padded back and straps",
      "Water-resistant",
      "Cartoon print front",
      "Side bottle holders"
    ]
  },
  28: {
    name: "Geometry Box #3",
    category: "Stationery",
    bulk: 30,
    retail: 50,
    online: 65,
    description: "Essential set for geometry – includes compass, divider, ruler, protractor and case.",
    icon: "ruler-combined",
    specs: [
      "Compass and divider",
      "Ruler and protractor",
      "Durable storage box",
      "Metal precision tips",
      "Ideal for school use"
    ]
  },
  29: {
    name: "Coloring Book #3",
    category: "Art",
    bulk: 25,
    retail: 40,
    online: 50,
    description: "Fun-filled 20-page coloring book for kids, filled with creative and educational drawings.",
    icon: "book-open",
    specs: [
      "20 pages of activities",
      "Crayon-friendly paper",
      "Engaging illustrations",
      "Suitable for ages 4-10",
      "Brightly printed covers"
    ]
  },
  30: {
    name: "Pencil Box #3",
    category: "Stationery",
    bulk: 20,
    retail: 40,
    online: 55,
    description: "Sturdy magnetic-lock pencil box with dual compartments for organized storage.",
    icon: "box",
    specs: [
      "2 separate compartments",
      "Magnetic snap lock",
      "Colorful printed exterior",
      "Spacious layout",
      "Made of durable plastic"
    ]
  },
  31: {
    name: "HB Pencil #4",
    category: "Writing",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "Pack of 10 HB pencils designed for smooth and consistent writing experience.",
    icon: "pencil-alt",
    specs: [
      "HB grade lead",
      "Smooth writing",
      "Wooden body",
      "Pack of 10",
      "Break-resistant core"
    ]
  },
  32: {
    name: "Eraser #4",
    category: "Correction",
    bulk: 1,
    retail: 3,
    online: 4,
    description: "Dust-free eraser made from soft rubber for clean and precise erasing.",
    icon: "eraser",
    specs: [
      "Soft rubber material",
      "Dust-free",
      "Non-smudging",
      "Compact size",
      "Ideal for all pencils"
    ]
  },
  33: {
    name: "Sharpener #4",
    category: "Stationery",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "Classic single-blade sharpener with durable plastic body and smooth sharpening.",
    icon: "bolt",
    specs: [
      "Plastic body",
      "Stainless steel blade",
      "Smooth operation",
      "Compact design",
      "Kid-friendly edges"
    ]
  },
  34: {
    name: "12-Color Crayon Set #4",
    category: "Art",
    bulk: 10,
    retail: 20,
    online: 25,
    description: "Set of vibrant oil-based crayons in 12 shades. Safe and smooth for kids.",
    icon: "palette",
    specs: [
      "12 rich colors",
      "Oil-based smooth finish",
      "Child-safe",
      "Reusable box",
      "Ideal for school & home"
    ]
  },
  35: {
    name: "A4 Drawing Book #4",
    category: "Drawing",
    bulk: 20,
    retail: 35,
    online: 45,
    description: "Premium 40-page drawing book with A4-sized thick white sheets.",
    icon: "book",
    specs: [
      "A4 size sheets",
      "40 pages",
      "Perfect for sketches",
      "Stapled binding",
      "Clean tear-off edges"
    ]
  },
  36: {
  name: "Water Bottle (Kids) #4",
  category: "School",
  bulk: 35,
  retail: 70,
  online: 85,
  description: "Durable 500ml water bottle with cartoon prints and a flip lid for kids.",
  icon: "tint",
  specs: [
    "500ml capacity",
    "Cartoon print design",
    "Leak-proof lid",
    "BPA-free plastic",
    "Easy to carry handle"
  ]
},
37: {
  name: "Kids School Bag #4",
  category: "School",
  bulk: 180,
  retail: 250,
  online: 300,
  description: "Spacious school bag with 3 compartments and soft padding, cartoon-themed.",
  icon: "backpack",
  specs: [
    "3 large compartments",
    "Soft padded straps",
    "Cartoon front print",
    "Water-resistant material",
    "Side mesh bottle holders"
  ]
},
38: {
  name: "Geometry Box #4",
  category: "Stationery",
  bulk: 30,
  retail: 50,
  online: 65,
  description: "Complete geometry tool set with compass, protractor, ruler, and divider.",
  icon: "ruler-combined",
  specs: [
    "Includes compass, scale, protractor",
    "Sturdy plastic case",
    "Sharp metal tips",
    "Anti-rust finish",
    "Ideal for school use"
  ]
},
39: {
  name: "Coloring Book #4",
  category: "Art",
  bulk: 25,
  retail: 40,
  online: 50,
  description: "20 fun and educational coloring pages for children aged 4 to 10.",
  icon: "book-open",
  specs: [
    "20 interactive pages",
    "Child-safe paper quality",
    "Creative illustrations",
    "Thick white paper",
    "Perfect for crayons and color pencils"
  ]
},
40: {
  name: "Pencil Box #4",
  category: "Stationery",
  bulk: 20,
  retail: 40,
  online: 55,
  description: "Double compartment pencil box with secure magnetic lock for kids.",
  icon: "box",
  specs: [
    "Dual storage sections",
    "Magnetic snap lock",
    "Cartoon themed",
    "Hard plastic exterior",
    "Lightweight and durable"
  ]
},
41: {
  name: "HB Pencil #5",
  category: "Writing",
  bulk: 2,
  retail: 5,
  online: 6,
  description: "Set of 10 HB grade pencils offering clean and comfortable writing.",
  icon: "pencil-alt",
  specs: [
    "HB grade lead",
    "Wooden body",
    "Pack of 10",
    "Break-resistant",
    "Smooth glide"
  ]
},
42: {
  name: "Eraser #5",
  category: "Correction",
  bulk: 1,
  retail: 3,
  online: 4,
  description: "Dust-free soft rubber eraser that removes pencil marks cleanly.",
  icon: "eraser",
  specs: [
    "Soft rubber",
    "Dust-free",
    "Non-toxic",
    "Smudge-resistant",
    "Compact shape"
  ]
},
43: {
  name: "Sharpener #5",
  category: "Stationery",
  bulk: 2,
  retail: 5,
  online: 6,
  description: "Classic single-blade sharpener made of plastic for everyday use.",
  icon: "bolt",
  specs: [
    "Stainless steel blade",
    "Plastic body",
    "Smooth sharpening",
    "Easy to grip",
    "Lightweight design"
  ]
},
44: {
  name: "12-Color Crayon Set #5",
  category: "Art",
  bulk: 10,
  retail: 20,
  online: 25,
  description: "Set of 12 smooth and colorful crayons ideal for art and school use.",
  icon: "palette",
  specs: [
    "12 oil-based crayons",
    "Bright and rich colors",
    "Safe for children",
    "Durable pack",
    "Non-toxic"
  ]
},
45: {
  name: "A4 Drawing Book #5",
  category: "Drawing",
  bulk: 20,
  retail: 35,
  online: 45,
  description: "A4 size drawing book with 40 white pages ideal for sketches and illustrations.",
  icon: "book",
  specs: [
    "A4 format",
    "40 blank pages",
    "High-quality paper",
    "Ideal for sketching",
    "Flexible cover design"
  ]
},
46: {
  name: "Water Bottle (Kids) #5",
  category: "School",
  bulk: 35,
  retail: 70,
  online: 85,
  description: "Cute 500ml water bottle for kids featuring fun cartoon prints and flip lid.",
  icon: "tint",
  specs: [
    "500ml capacity",
    "Cartoon character print",
    "Leak-proof lid",
    "BPA-free plastic",
    "Easy to clean"
  ]
},
47: {
  name: "Kids School Bag #5",
  category: "School",
  bulk: 180,
  retail: 250,
  online: 300,
  description: "Spacious cartoon-themed school bag with 3 compartments and padded straps.",
  icon: "backpack",
  specs: [
    "3 spacious compartments",
    "Soft padding for comfort",
    "Durable stitching",
    "Water-resistant",
    "Cartoon design"
  ]
},
48: {
  name: "Geometry Box #5",
  category: "Stationery",
  bulk: 30,
  retail: 50,
  online: 65,
  description: "Essential geometry set including compass, protractor, scale, and divider.",
  icon: "ruler-combined",
  specs: [
    "Includes compass, scale, protractor",
    "Transparent plastic",
    "Sturdy case",
    "Anti-rust metal tools",
    "Compact design"
  ]
},
49: {
  name: "Coloring Book #5",
  category: "Art",
  bulk: 25,
  retail: 40,
  online: 50,
  description: "Creative coloring book with 20 activity pages for young artists.",
  icon: "book-open",
  specs: [
    "20 creative activities",
    "Bold outlines for easy coloring",
    "Non-toxic paper",
    "Fun characters",
    "Ideal for kids 4-10"
  ]
},
50: {
  name: "Pencil Box #5",
  category: "Stationery",
  bulk: 20,
  retail: 40,
  online: 55,
  description: "Hard plastic pencil box with two compartments and magnetic closure.",
  icon: "box",
  specs: [
    "Double compartments",
    "Cartoon artwork",
    "Magnetic closure",
    "Hard shell design",
    "Lightweight & spacious"
  ]
},
51: {
  name: "HB Pencil #6",
  category: "Writing",
  bulk: 2,
  retail: 5,
  online: 6,
  description: "Pack of 10 HB pencils with premium lead and wooden body.",
  icon: "pencil-alt",
  specs: [
    "HB grade graphite",
    "Smooth writing",
    "Wooden casing",
    "Pack of 10",
    "Break-resistant lead"
  ]
},
52: {
  name: "Eraser #6",
  category: "Correction",
  bulk: 1,
  retail: 3,
  online: 4,
  description: "High-quality dust-free eraser for clean and accurate correction.",
  icon: "eraser",
  specs: [
    "Soft rubber",
    "No smudges",
    "Dust-free",
    "Long-lasting",
    "Child-safe"
  ]
},
53: {
  name: "Sharpener #6",
  category: "Stationery",
  bulk: 2,
  retail: 5,
  online: 6,
  description: "Reliable plastic sharpener with stainless steel blade for neat sharpening.",
  icon: "bolt",
  specs: [
    "Sharp blade",
    "Single hole",
    "Smooth finish",
    "Durable build",
    "Compact size"
  ]
},
54: {
  name: "12-Color Crayon Set #6",
  category: "Art",
  bulk: 10,
  retail: 20,
  online: 25,
  description: "Set of 12 safe, non-toxic crayons ideal for school and coloring fun.",
  icon: "palette",
  specs: [
    "12 vibrant colors",
    "Oil-based",
    "Non-toxic material",
    "Smooth glide",
    "Safe for kids"
  ]
},
55: {
  name: "A4 Drawing Book #6",
  category: "Drawing",
  bulk: 20,
  retail: 35,
  online: 45,
  description: "A4 drawing book with 40 white high-GSM pages, perfect for sketching.",
  icon: "book",
  specs: [
    "40 drawing pages",
    "A4 size",
    "Thick white sheets",
    "Smooth finish",
    "Durable spine binding"
  ]
},
56: {
  name: "Water Bottle (Kids) #6",
  category: "School",
  bulk: 35,
  retail: 70,
  online: 85,
  description: "500ml BPA-free kids water bottle with vibrant cartoon print and flip lid.",
  icon: "tint",
  specs: [
    "500ml size",
    "Cartoon print",
    "BPA-free plastic",
    "Spill-proof cap",
    "Easy carry strap"
  ]
},
57: {
  name: "Kids School Bag #6",
  category: "School",
  bulk: 180,
  retail: 250,
  online: 300,
  description: "Ergonomic school bag with colorful cartoon design and spacious compartments.",
  icon: "backpack",
  specs: [
    "3 main compartments",
    "Ergonomic shoulder straps",
    "Cartoon theme",
    "Durable zippers",
    "Side mesh for bottle"
  ]
},

  58: {
    name: "Geometry Box #6",
    category: "Stationery",
    bulk: 30,
    retail: 50,
    online: 65,
    description: "Complete geometry set with compass, scale, protractor, and divider. Ideal for students.",
    icon: "ruler-combined",
    specs: [
      "Includes compass, scale, protractor, divider",
      "Transparent plastic tools",
      "Durable case",
      "Metal compass",
      "Perfect for school use"
    ]
  },
  59: {
    name: "Coloring Book #6",
    category: "Art",
    bulk: 25,
    retail: 40,
    online: 50,
    description: "Engaging coloring book with 20 creative activity pages. Great for young kids.",
    icon: "book-open",
    specs: [
      "20 activity pages",
      "Child-safe material",
      "Ideal for ages 4-10",
      "Creative and fun themes",
      "Thick pages for coloring"
    ]
  },
  60: {
    name: "Pencil Box #6",
    category: "Stationery",
    bulk: 20,
    retail: 40,
    online: 55,
    description: "Dual compartment pencil box with magnetic lock. Fun and functional for students.",
    icon: "box",
    specs: [
      "Double compartment design",
      "Magnetic lock",
      "Durable plastic",
      "Cartoon print",
      "Ample storage"
    ]
  },
  61: {
    name: "HB Pencil #7",
    category: "Writing",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "Classic HB wooden pencils. Smooth and reliable for everyday writing.",
    icon: "pencil-alt",
    specs: [
      "Pack of 10 pencils",
      "HB grade graphite",
      "Wooden body",
      "Smooth writing",
      "Ideal for school and office"
    ]
  },
  62: {
    name: "Eraser #7",
    category: "Correction",
    bulk: 1,
    retail: 3,
    online: 4,
    description: "Soft, dust-free erasers for clean erasing without smudging.",
    icon: "eraser",
    specs: [
      "Soft rubber material",
      "Dust-free performance",
      "Smudge-resistant",
      "Non-toxic",
      "Pack of 2"
    ]
  },
  63: {
    name: "Sharpener #7",
    category: "Stationery",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "Efficient single-blade sharpener with plastic body. Sharpens cleanly.",
    icon: "bolt",
    specs: [
      "Single blade",
      "Compact design",
      "Plastic body",
      "Safe for children",
      "Sharpens quickly"
    ]
  },
  64: {
    name: "12-Color Crayon Set #7",
    category: "Art",
    bulk: 10,
    retail: 20,
    online: 25,
    description: "Bright, oil-based crayons in 12 vibrant colors. Safe and fun.",
    icon: "palette",
    specs: [
      "12 assorted colors",
      "Non-toxic",
      "Smooth coloring",
      "Durable crayons",
      "Comes in box"
    ]
  },
  65: {
    name: "A4 Drawing Book #7",
    category: "Drawing",
    bulk: 20,
    retail: 35,
    online: 45,
    description: "40-page white sheet A4 drawing book. Great for sketching and projects.",
    icon: "book",
    specs: [
      "A4 size",
      "40 white sheets",
      "Smooth paper",
      "Thick cover",
      "Ideal for crayons & pencils"
    ]
  },
  66: {
    name: "Water Bottle (Kids) #7",
    category: "School",
    bulk: 35,
    retail: 70,
    online: 85,
    description: "500ml cartoon-themed water bottle for kids. Leak-proof and BPA-free.",
    icon: "tint",
    specs: [
      "Plastic bottle",
      "Cartoon print",
      "Leak-proof cap",
      "500ml capacity",
      "Child-safe material"
    ]
  },
  67: {
    name: "Kids School Bag #7",
    category: "School",
    bulk: 180,
    retail: 250,
    online: 300,
    description: "Cartoon-themed school bag with 3 padded compartments. Comfortable and stylish.",
    icon: "backpack",
    specs: [
      "3 compartments",
      "Cartoon design",
      "Soft shoulder padding",
      "Durable zippers",
      "Water-resistant material"
    ]
  },
  68: {
        name: "Geometry Box #7",
        category: "School Supplies",
        bulk: 30,
        retail: 50,
        online: 65,
        description: "Compass, scale, protractor, and divider included for precision geometry work.",
        icon: "ruler-combined",
        specs: [
            "Includes: Compass, Protractor, Divider, Scale",
            "Material: Stainless steel and plastic",
            "Ideal for students and professionals",
            "Comes in a sturdy box"
        ]
    },
    69: {
        name: "Coloring Book #7",
        category: "Art Materials",
        bulk: 25,
        retail: 40,
        online: 50,
        description: "20 fun-filled activity pages designed for kids aged 4–10 to enhance creativity.",
        icon: "book-open",
        specs: [
            "20 engaging activity pages",
            "Suitable for ages 4-10",
            "High-quality thick paper",
            "Encourages creativity and color recognition"
        ]
    },
    70: {
        name: "Pencil Box #7",
        category: "School Supplies",
        bulk: 20,
        retail: 40,
        online: 55,
        description: "Double compartment pencil box with magnetic lock for better organization.",
        icon: "box",
        specs: [
            "Double storage compartments",
            "Magnetic lock mechanism",
            "Durable and compact design",
            "Suitable for kids and students"
        ]
    },
    71: {
        name: "HB Pencil #8",
        category: "Writing",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "HB grade pencils with a wooden body in a pack of 10 for smooth writing.",
        icon: "pencil-alt",
        specs: [
            "Material: Premium wood casing",
            "Lead Grade: HB (Medium)",
            "Pack Size: 10 pencils",
            "Smooth writing experience",
            "Eco-friendly materials"
        ]
    },
    72: {
        name: "Eraser #8",
        category: "Correction",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Dust-free soft rubber eraser for clean and precise erasing without smudging.",
        icon: "eraser",
        specs: [
            "Material: Soft rubber",
            "Dust-free formula",
            "Precise erasing",
            "Non-abrasive"
        ]
    },
    73: {
        name: "Sharpener #8",
        category: "School Supplies",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Durable single blade sharpener with a sturdy plastic body for everyday use.",
        icon: "cut",
        specs: [
            "Single high-quality blade",
            "Plastic casing",
            "Sharpens smoothly",
            "Compact and safe for kids"
        ]
    },
    74: {
        name: "12-Color Crayon Set #8",
        category: "Art Materials",
        bulk: 10,
        retail: 20,
        online: 25,
        description: "A set of 12 vibrant oil-based crayons, safe and non-toxic for kids’ use.",
        icon: "palette",
        specs: [
            "12 assorted bright colors",
            "Oil-based, non-toxic",
            "Easy to grip for small hands",
            "Ideal for creative art projects"
        ]
    },
    75: {
        name: "A4 Drawing Book #8",
        category: "Art Materials",
        bulk: 20,
        retail: 35,
        online: 45,
        description: "A4 size drawing book with 40 white sheets ideal for sketches and art projects.",
        icon: "file-alt",
        specs: [
            "Size: A4",
            "Pages: 40 high-quality sheets",
            "Paper: Thick and smooth",
            "Perfect for pencils, crayons, and markers"
        ]
    },
    76: {
        name: "Water Bottle (Kids) #8",
        category: "School Supplies",
        bulk: 35,
        retail: 70,
        online: 85,
        description: "500ml cartoon-printed plastic water bottle for kids – leakproof and safe.",
        icon: "tint",
        specs: [
            "Capacity: 500ml",
            "Material: BPA-free plastic",
            "Cartoon-themed design",
            "Leakproof lid with easy-sip cap"
        ]
    },
    77: {
        name: "Kids School Bag #8",
        category: "School Supplies",
        bulk: 180,
        retail: 250,
        online: 300,
        description: "Cartoon-themed school bag with 3 compartments and soft padding for comfort.",
        icon: "school",
        specs: [
            "3 spacious compartments",
            "Padded shoulder straps",
            "Lightweight and durable",
            "Attractive cartoon design"
        ]
    },
    78: {
        name: "Geometry Box #8",
        category: "School Supplies",
        bulk: 30,
        retail: 50,
        online: 65,
        description: "Geometry set including compass, divider, scale, and protractor for students.",
        icon: "ruler-horizontal",
        specs: [
            "Includes: Compass, Protractor, Divider, Scale",
            "Durable case included",
            "Ideal for school use",
            "Lightweight and portable"
        ]
    },
    79: {
        name: "Coloring Book #8",
        category: "Art Materials",
        bulk: 25,
        retail: 40,
        online: 50,
        description: "20 pages of fun and educational coloring content for children aged 4–10.",
        icon: "book",
        specs: [
            "20 coloring pages",
            "Child-safe paper quality",
            "Fun illustrations for kids",
            "Promotes learning and motor skills"
        ]
    },
      80: {
        name: "Pencil Box #8",
        category: "School Supplies",
        bulk: 20,
        retail: 40,
        online: 55,
        description: "Spacious pencil box with dual compartments and a secure magnetic lock.",
        icon: "box",
        specs: [
            "Two storage compartments",
            "Magnetic closure for easy access",
            "Durable and lightweight",
            "Ideal for kids and students"
        ]
    },
    81: {
        name: "HB Pencil #9",
        category: "Writing",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Classic HB pencils with wooden casing, perfect for school or office use.",
        icon: "pencil-alt",
        specs: [
            "Lead Grade: HB",
            "Wooden body",
            "Pack of 10",
            "Smooth writing quality"
        ]
    },
    82: {
        name: "Eraser #9",
        category: "Correction",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Dust-free rubber eraser designed for clean erasing with no smudges.",
        icon: "eraser",
        specs: [
            "Soft rubber texture",
            "Non-toxic and kid-friendly",
            "Compact size for easy grip",
            "Leaves minimal residue"
        ]
    },
    83: {
        name: "Sharpener #9",
        category: "School Supplies",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Efficient single blade sharpener with plastic body for smooth sharpening.",
        icon: "cut",
        specs: [
            "Sharp steel blade",
            "Durable plastic body",
            "Child-safe design",
            "Compact and portable"
        ]
    },
    84: {
        name: "12-Color Crayon Set #9",
        category: "Art Materials",
        bulk: 10,
        retail: 20,
        online: 25,
        description: "Vibrant and oil-based crayons in a set of 12, safe and non-toxic for kids.",
        icon: "palette",
        specs: [
            "12 vivid colors",
            "Non-toxic and safe",
            "Oil-based for smoother strokes",
            "Perfect for school and home"
        ]
    },
    85: {
        name: "A4 Drawing Book #9",
        category: "Art Materials",
        bulk: 20,
        retail: 35,
        online: 45,
        description: "High-quality A4 drawing book with 40 white sheets for sketches and art.",
        icon: "file-alt",
        specs: [
            "Size: A4 (Standard)",
            "40 crisp drawing pages",
            "Smooth surface paper",
            "Good for pencils, pens, and markers"
        ]
    },
    86: {
        name: "Water Bottle (Kids) #9",
        category: "School Supplies",
        bulk: 35,
        retail: 70,
        online: 85,
        description: "Fun cartoon-printed kids water bottle, leakproof and 500ml capacity.",
        icon: "tint",
        specs: [
            "Capacity: 500ml",
            "Leakproof and BPA-free",
            "Attractive cartoon designs",
            "Safe and easy for children"
        ]
    },
    87: {
        name: "Kids School Bag #9",
        category: "School Supplies",
        bulk: 180,
        retail: 250,
        online: 300,
        description: "Sturdy cartoon-themed school bag with 3 spacious compartments and padding.",
        icon: "school",
        specs: [
            "3 compartments for books & supplies",
            "Soft padded straps",
            "Lightweight & durable",
            "Attractive cartoon design"
        ]
    },
    88: {
        name: "Geometry Box #9",
        category: "School Supplies",
        bulk: 30,
        retail: 50,
        online: 65,
        description: "Complete geometry box with compass, protractor, divider, and scale.",
        icon: "ruler-horizontal",
        specs: [
            "Contents: Compass, Divider, Scale, Protractor",
            "Ideal for math & geometry classes",
            "Durable plastic case",
            "Student-friendly set"
        ]
    },
    89: {
        name: "Coloring Book #9",
        category: "Art Materials",
        bulk: 25,
        retail: 40,
        online: 50,
        description: "Creative coloring book with 20 themed activity pages for kids aged 4–10.",
        icon: "book",
        specs: [
            "20 fun activity pages",
            "Good quality paper",
            "Designed for ages 4–10",
            "Promotes creativity and fun"
        ]
    },
        90: {
        name: "Pencil Box #9",
        category: "School Supplies",
        bulk: 20,
        retail: 40,
        online: 55,
        description: "Dual compartment pencil box with a strong magnetic lock, perfect for organizing supplies.",
        icon: "box",
        specs: [
            "Two compartments",
            "Secure magnetic lock",
            "Compact and durable",
            "Perfect for school use"
        ]
    },
    91: {
        name: "HB Pencil #10",
        category: "Writing",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "HB wooden pencils for smooth and sharp writing. Perfect for school and office.",
        icon: "pencil-alt",
        specs: [
            "Grade: HB",
            "Pack of 10",
            "Smooth and break-resistant",
            "Eco-friendly wood"
        ]
    },
    92: {
        name: "Eraser #10",
        category: "Correction",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Dust-free soft rubber eraser that delivers a clean, smudge-free experience.",
        icon: "eraser",
        specs: [
            "Soft rubber",
            "Dust-free design",
            "Smudge-free performance",
            "Kid-safe and non-toxic"
        ]
    },
    93: {
        name: "Sharpener #10",
        category: "School Supplies",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Single blade plastic sharpener designed for smooth and precise sharpening.",
        icon: "cut",
        specs: [
            "Plastic body",
            "Stainless steel blade",
            "Compact size",
            "Efficient and safe"
        ]
    },
    94: {
        name: "12-Color Crayon Set #10",
        category: "Art Materials",
        bulk: 10,
        retail: 20,
        online: 25,
        description: "Set of 12 oil-based crayons in vibrant colors. Ideal for kids’ creative expression.",
        icon: "palette",
        specs: [
            "12 vibrant shades",
            "Non-toxic and safe",
            "Smooth coloring experience",
            "Reusable pack"
        ]
    },
    95: {
        name: "A4 Drawing Book #10",
        category: "Art Materials",
        bulk: 20,
        retail: 35,
        online: 45,
        description: "A4 size drawing book with 40 white sheets for creative sketches and school art.",
        icon: "book-open",
        specs: [
            "40 high-quality pages",
            "A4 size paper",
            "Thick and smooth sheets",
            "Ideal for coloring and sketching"
        ]
    },
    96: {
        name: "Water Bottle (Kids) #10",
        category: "School Supplies",
        bulk: 35,
        retail: 70,
        online: 85,
        description: "Leakproof cartoon-themed water bottle with 500ml capacity for kids.",
        icon: "tint",
        specs: [
            "Cartoon print design",
            "500ml BPA-free bottle",
            "Easy-to-use spout",
            "Durable and safe for kids"
        ]
    },
    97: {
        name: "Kids School Bag #10",
        category: "School Supplies",
        bulk: 180,
        retail: 250,
        online: 300,
        description: "Cartoon-themed kids backpack with 3 compartments and padded support for comfort.",
        icon: "school",
        specs: [
            "3 large compartments",
            "Soft padded straps",
            "Lightweight material",
            "Fun cartoon design"
        ]
    },
    98: {
        name: "Geometry Box #10",
        category: "School Supplies",
        bulk: 30,
        retail: 50,
        online: 65,
        description: "Complete geometry box set including protractor, compass, scale, and divider.",
        icon: "ruler-combined",
        specs: [
            "Includes compass, divider, protractor, ruler",
            "Strong plastic case",
            "Ideal for school students",
            "Precision tools included"
        ]
    },
    99: {
        name: "Coloring Book #10",
        category: "Art Materials",
        bulk: 25,
        retail: 40,
        online: 50,
        description: "Coloring book with 20 engaging activity pages for young learners.",
        icon: "book",
        specs: [
            "20 fun-filled pages",
            "Bold outlines for easy coloring",
            "Thick paper quality",
            "Designed for ages 4–10"
        ]
    },
    100: {
        name: "Pencil Box #10",
        category: "School Supplies",
        bulk: 20,
        retail: 40,
        online: 55,
        description: "Magnetic double-compartment pencil box for keeping essentials organized.",
        icon: "box",
        specs: [
            "Dual compartments",
            "Magnetic locking system",
            "Durable plastic",
            "Colorful and child-friendly"
        ]
    },
    101: {
        name: "HB Pencil #11",
        category: "Writing",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Pack of HB pencils designed for comfortable grip and consistent writing.",
        icon: "pencil-alt",
        specs: [
            "HB grade graphite",
            "Premium wooden body",
            "Smooth writing experience",
            "Pack of 10"
        ]
    },
    102: {
        name: "Eraser #11",
        category: "Correction",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Dust-free soft eraser ideal for classroom and office use.",
        icon: "eraser",
        specs: [
            "Dustless formula",
            "Erases cleanly",
            "Non-toxic material",
            "Smooth finish"
        ]
    },
       103: {
        name: "Sharpener #11",
        category: "School Supplies",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Single blade, plastic body.",
        icon: "cut",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    104: {
        name: "12-Color Crayon Set #11",
        category: "Art Materials",
        bulk: 10,
        retail: 20,
        online: 25,
        description: "Non-toxic, oil-based colors.",
        icon: "palette",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    105: {
        name: "A4 Drawing Book #11",
        category: "Art Materials",
        bulk: 20,
        retail: 35,
        online: 45,
        description: "40 pages, white drawing sheets.",
        icon: "book-open",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    106: {
        name: "Water Bottle (Kids) #11",
        category: "School Supplies",
        bulk: 35,
        retail: 70,
        online: 85,
        description: "Plastic, cartoon print, 500ml.",
        icon: "tint",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    107: {
        name: "Kids School Bag #11",
        category: "School Supplies",
        bulk: 180,
        retail: 250,
        online: 300,
        description: "3 compartments, soft padded, cartoon themed.",
        icon: "school",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    108: {
        name: "Geometry Box #11",
        category: "School Supplies",
        bulk: 30,
        retail: 50,
        online: 65,
        description: "Compass, scale, protractor, divider.",
        icon: "ruler-combined",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    109: {
        name: "Coloring Book #11",
        category: "Art Materials",
        bulk: 25,
        retail: 40,
        online: 50,
        description: "20 activity pages, for age 4-10.",
        icon: "book",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    110: {
        name: "Pencil Box #11",
        category: "School Supplies",
        bulk: 20,
        retail: 40,
        online: 55,
        description: "Double compartment, magnetic lock.",
        icon: "box",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    111: {
        name: "HB Pencil #12",
        category: "Writing",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "HB grade, wooden body, pack of 10.",
        icon: "pencil-alt",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    112: {
        name: "Eraser #12",
        category: "Correction",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Soft rubber, dust-free.",
        icon: "eraser",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    113: {
        name: "Sharpener #12",
        category: "School Supplies",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Single blade, plastic body.",
        icon: "cut",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    114: {
        name: "12-Color Crayon Set #12",
        category: "Art Materials",
        bulk: 10,
        retail: 20,
        online: 25,
        description: "Non-toxic, oil-based colors.",
        icon: "palette",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    115: {
        name: "A4 Drawing Book #12",
        category: "Art Materials",
        bulk: 20,
        retail: 35,
        online: 45,
        description: "40 pages, white drawing sheets.",
        icon: "book-open",
        specs: [
            "Premium quality",
            "Durable and safe",
            "Ideal for daily use",
            "Lightweight design"
        ]
    },
    
    116: {
        name: "Water Bottle (Kids) #12",
        category: "School Supplies",
        bulk: 35,
        retail: 70,
        online: 85,
        description: "Plastic, cartoon print, 500ml.",
        icon: "tint",
        specs: [
            "Leak-proof cap",
            "Kid-friendly design",
            "Durable plastic",
            "Fun cartoon print"
        ]
    },
    117: {
        name: "Kids School Bag #12",
        category: "School Supplies",
        bulk: 180,
        retail: 250,
        online: 300,
        description: "3 compartments, soft padded, cartoon themed.",
        icon: "school",
        specs: [
            "Ergonomic padded straps",
            "Spacious compartments",
            "Durable stitching",
            "Attractive cartoon design"
        ]
    },
    118: {
        name: "Geometry Box #12",
        category: "School Supplies",
        bulk: 30,
        retail: 50,
        online: 65,
        description: "Compass, scale, protractor, divider.",
        icon: "ruler-combined",
        specs: [
            "Complete set for school geometry",
            "High precision tools",
            "Durable plastic and metal mix",
            "Ideal for middle and high school"
        ]
    },
    119: {
        name: "Coloring Book #12",
        category: "Art Materials",
        bulk: 25,
        retail: 40,
        online: 50,
        description: "20 activity pages, for age 4-10.",
        icon: "book",
        specs: [
            "Stimulates creativity",
            "Thick paper for coloring",
            "Ideal for markers/crayons",
            "Educational themes"
        ]
    },
    120: {
        name: "Pencil Box #12",
        category: "School Supplies",
        bulk: 20,
        retail: 40,
        online: 55,
        description: "Double compartment, magnetic lock.",
        icon: "box",
        specs: [
            "Spacious double section",
            "Secure magnetic closure",
            "Attractive design",
            "Ideal for school-going kids"
        ]
    },
    121: {
        name: "HB Pencil #13",
        category: "Writing",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "HB grade, wooden body, pack of 10.",
        icon: "pencil-alt",
        specs: [
            "Smooth graphite core",
            "Comfortable grip",
            "Ideal for writing and sketching",
            "Eco-friendly wood"
        ]
    },
    122: {
        name: "Eraser #13",
        category: "Correction",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Soft rubber, dust-free.",
        icon: "eraser",
        specs: [
            "Non-toxic rubber",
            "No smudging",
            "Ideal for students and artists",
            "Compact and effective"
        ]
    },
    123: {
        name: "Sharpener #13",
        category: "School Supplies",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Single blade, plastic body.",
        icon: "cut",
        specs: [
            "Sharp stainless steel blade",
            "Compact plastic body",
            "Child-safe edges",
            "Smooth sharpening"
        ]
    },
    124: {
        name: "12-Color Crayon Set #13",
        category: "Art Materials",
        bulk: 10,
        retail: 20,
        online: 25,
        description: "Non-toxic, oil-based colors.",
        icon: "palette",
        specs: [
            "Bright and vibrant colors",
            "Break-resistant build",
            "Safe for children",
            "Easy to grip and use"
        ]
    },
    125: {
        name: "A4 Drawing Book #13",
        category: "Art Materials",
        bulk: 20,
        retail: 35,
        online: 45,
        description: "40 pages, white drawing sheets.",
        icon: "book-open",
        specs: [
            "Thick white paper",
            "Great for pencil, ink, or crayons",
            "Glue-bound pages",
            "A4 size, easy to carry"
        ]
    },
    126: {
        name: "Water Bottle (Kids) #13",
        category: "School Supplies",
        bulk: 35,
        retail: 70,
        online: 85,
        description: "Plastic, cartoon print, 500ml.",
        icon: "tint",
        specs: [
            "Leak-proof cap",
            "Kid-friendly design",
            "Durable plastic",
            "Fun cartoon print"
        ]
    },
    127: {
        name: "Kids School Bag #13",
        category: "School Supplies",
        bulk: 180,
        retail: 250,
        online: 300,
        description: "3 compartments, soft padded, cartoon themed.",
        icon: "school",
        specs: [
            "Ergonomic padded straps",
            "Spacious compartments",
            "Durable stitching",
            "Attractive cartoon design"
        ]
    },
    128: {
        name: "Geometry Box #13",
        category: "School Supplies",
        bulk: 30,
        retail: 50,
        online: 65,
        description: "Compass, scale, protractor, divider.",
        icon: "ruler-combined",
        specs: [
            "Complete set for school geometry",
            "High precision tools",
            "Durable plastic and metal mix",
            "Ideal for middle and high school"
        ]
    },
    129: {
        name: "Coloring Book #13",
        category: "Art Materials",
        bulk: 25,
        retail: 40,
        online: 50,
        description: "20 activity pages, for age 4-10.",
        icon: "book",
        specs: [
            "Stimulates creativity",
            "Thick paper for coloring",
            "Ideal for markers/crayons",
            "Educational themes"
        ]
    },
    130: {
        name: "Pencil Box #13",
        category: "School Supplies",
        bulk: 20,
        retail: 40,
        online: 55,
        description: "Double compartment, magnetic lock.",
        icon: "box",
        specs: [
            "Spacious double section",
            "Secure magnetic closure",
            "Attractive design",
            "Ideal for school-going kids"
        ]
    },
    131: {
        name: "HB Pencil #14",
        category: "Stationery",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "HB grade, wooden body, pack of 10",
        icon: "pencil-alt",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    132: {
        name: "Eraser #14",
        category: "Stationery",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Soft rubber, dust-free",
        icon: "eraser",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    133: {
        name: "Sharpener #14",
        category: "Stationery",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Single blade, plastic body",
        icon: "cut",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    134: {
        name: "12-Color Crayon Set #14",
        category: "Stationery",
        bulk: 10,
        retail: 20,
        online: 25,
        description: "Non-toxic, oil-based colors",
        icon: "palette",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    135: {
        name: "A4 Drawing Book #14",
        category: "Stationery",
        bulk: 20,
        retail: 35,
        online: 45,
        description: "40 pages, white drawing sheets",
        icon: "book-open",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    136: {
        name: "Water Bottle (Kids) #14",
        category: "Stationery",
        bulk: 35,
        retail: 70,
        online: 85,
        description: "Plastic, cartoon print, 500ml",
        icon: "tint",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    137: {
        name: "Kids School Bag #14",
        category: "Stationery",
        bulk: 180,
        retail: 250,
        online: 300,
        description: "3 compartments, soft padded, cartoon themed",
        icon: "school",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    138: {
        name: "Geometry Box #14",
        category: "Stationery",
        bulk: 30,
        retail: 50,
        online: 65,
        description: "Compass, scale, protractor, divider",
        icon: "ruler-combined",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    139: {
        name: "Coloring Book #14",
        category: "Stationery",
        bulk: 25,
        retail: 40,
        online: 50,
        description: "20 activity pages, for age 4-10",
        icon: "book",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    140: {
        name: "Pencil Box #14",
        category: "Stationery",
        bulk: 20,
        retail: 40,
        online: 55,
        description: "Double compartment, magnetic lock",
        icon: "box",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    141: {
        name: "HB Pencil #15",
        category: "Stationery",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "HB grade, wooden body, pack of 10",
        icon: "pencil-alt",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    142: {
        name: "Eraser #15",
        category: "Stationery",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Soft rubber, dust-free",
        icon: "eraser",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    143: {
        name: "Sharpener #15",
        category: "Stationery",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Single blade, plastic body",
        icon: "cut",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    144: {
        name: "12-Color Crayon Set #15",
        category: "Stationery",
        bulk: 10,
        retail: 20,
        online: 25,
        description: "Non-toxic, oil-based colors",
        icon: "palette",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
    145: {
        name: "A4 Drawing Book #15",
        category: "Stationery",
        bulk: 20,
        retail: 35,
        online: 45,
        description: "40 pages, white drawing sheets",
        icon: "book-open",
        specs: [
            "High-quality material",
            "Affordable pricing",
            "Student-friendly design",
            "Ideal for school use"
        ]
    },
     146: {
        name: "Water Bottle (Kids) #15",
        category: "Stationery",
        bulk: 35,
        retail: 70,
        online: 85,
        description: "Plastic, cartoon print, 500ml",
        icon: "tint",
        specs: [
            "Leak-proof lid",
            "Vibrant cartoon design",
            "Lightweight and durable",
            "BPA-free plastic"
        ]
    },
    147: {
        name: "Kids School Bag #15",
        category: "Stationery",
        bulk: 180,
        retail: 250,
        online: 300,
        description: "3 compartments, soft padded, cartoon themed",
        icon: "school",
        specs: [
            "Ergonomic design",
            "Durable fabric",
            "Colorful cartoon theme",
            "Adjustable padded straps"
        ]
    },
    148: {
        name: "Geometry Box #15",
        category: "Stationery",
        bulk: 30,
        retail: 50,
        online: 65,
        description: "Compass, scale, protractor, divider",
        icon: "ruler-combined",
        specs: [
            "Metal compass with pencil",
            "Transparent protractor",
            "Scale and divider included",
            "Sturdy storage box"
        ]
    },
    149: {
        name: "Coloring Book #15",
        category: "Stationery",
        bulk: 25,
        retail: 40,
        online: 50,
        description: "20 activity pages, for age 4-10",
        icon: "book",
        specs: [
            "Fun and educational",
            "High-quality pages",
            "Suitable for ages 4 to 10",
            "Creative illustrations"
        ]
    },
    150: {
        name: "Pencil Box #15",
        category: "Stationery",
        bulk: 20,
        retail: 40,
        online: 55,
        description: "Double compartment, magnetic lock",
        icon: "box",
        specs: [
            "Spacious double compartments",
            "Durable magnetic closure",
            "Compact and portable",
            "Colorful exterior design"
        ]
    },
    151: {
        name: "HB Pencil #16",
        category: "Stationery",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "HB grade, wooden body, pack of 10",
        icon: "pencil-alt",
        specs: [
            "Smooth writing HB lead",
            "Wooden casing",
            "Easy to sharpen",
            "Break-resistant core"
        ]
    },
    152: {
        name: "Eraser #16",
        category: "Stationery",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Soft rubber, dust-free",
        icon: "eraser",
        specs: [
            "Non-toxic material",
            "Smudge-free erasing",
            "Comfortable grip",
            "Ideal for school use"
        ]
    },
    153: {
        name: "Sharpener #16",
        category: "Stationery",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Single blade, plastic body",
        icon: "cut",
        specs: [
            "Rust-free blade",
            "Plastic body",
            "Easy to handle",
            "Sharpens evenly"
        ]
    },
    154: {
        name: "12-Color Crayon Set #16",
        category: "Stationery",
        bulk: 10,
        retail: 20,
        online: 25,
        description: "Non-toxic, oil-based colors",
        icon: "palette",
        specs: [
            "Bright and vibrant shades",
            "Smooth coloring",
            "Safe for children",
            "Long-lasting crayons"
        ]
    },
    155: {
        name: "A4 Drawing Book #16",
        category: "Stationery",
        bulk: 20,
        retail: 35,
        online: 45,
        description: "40 pages, white drawing sheets",
        icon: "book-open",
        specs: [
            "Thick white sheets",
            "Ideal for sketching",
            "A4 size",
            "Spiral bound"
        ]
    },
    156: {
        name: "Water Bottle (Kids) #16",
        category: "Stationery",
        bulk: 35,
        retail: 70,
        online: 85,
        description: "Plastic, cartoon print, 500ml",
        icon: "tint",
        specs: [
            "Leak-proof lid",
            "Vibrant cartoon design",
            "Lightweight and durable",
            "BPA-free plastic"
        ]
    },
    157: {
        name: "Kids School Bag #16",
        category: "Stationery",
        bulk: 180,
        retail: 250,
        online: 300,
        description: "3 compartments, soft padded, cartoon themed",
        icon: "school",
        specs: [
            "Ergonomic design",
            "Durable fabric",
            "Colorful cartoon theme",
            "Adjustable padded straps"
        ]
    },
    158: {
        name: "Geometry Box #16",
        category: "Stationery",
        bulk: 30,
        retail: 50,
        online: 65,
        description: "Compass, scale, protractor, divider",
        icon: "ruler-combined",
        specs: [
            "Metal compass with pencil",
            "Transparent protractor",
            "Scale and divider included",
            "Sturdy storage box"
        ]
    },
    159: {
        name: "Coloring Book #16",
        category: "Stationery",
        bulk: 25,
        retail: 40,
        online: 50,
        description: "20 activity pages, for age 4-10",
        icon: "book",
        specs: [
            "Fun and educational",
            "High-quality pages",
            "Suitable for ages 4 to 10",
            "Creative illustrations"
        ]
    },
    160: {
        name: "Pencil Box #16",
        category: "Stationery",
        bulk: 20,
        retail: 40,
        online: 55,
        description: "Double compartment, magnetic lock",
        icon: "box",
        specs: [
            "Spacious double compartments",
            "Durable magnetic closure",
            "Compact and portable",
            "Colorful exterior design"
        ]
    },
        161: {
        name: "HB Pencil #17",
        category: "Stationery",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "HB grade, wooden body, pack of 10",
        icon: "pencil-alt",
        specs: [
            "Standard HB lead",
            "Natural wood finish",
            "Smooth and consistent writing",
            "Pack of 10 pencils"
        ]
    },
    162: {
        name: "Eraser #17",
        category: "Stationery",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Soft rubber, dust-free",
        icon: "eraser",
        specs: [
            "Non-smudge rubber",
            "Perfect for graphite removal",
            "Latex-free material",
            "Compact and efficient"
        ]
    },
    163: {
        name: "Sharpener #17",
        category: "Stationery",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Single blade, plastic body",
        icon: "cut",
        specs: [
            "Stainless steel blade",
            "Ergonomic grip design",
            "Compact and portable",
            "Easy waste disposal"
        ]
    },
    164: {
        name: "12-Color Crayon Set #17",
        category: "Stationery",
        bulk: 10,
        retail: 20,
        online: 25,
        description: "Non-toxic, oil-based colors",
        icon: "palette",
        specs: [
            "12 vibrant colors",
            "Smooth and creamy texture",
            "Non-toxic and child-safe",
            "Ideal for school and home"
        ]
    },
    165: {
        name: "A4 Drawing Book #17",
        category: "Stationery",
        bulk: 20,
        retail: 35,
        online: 45,
        description: "40 pages, white drawing sheets",
        icon: "book-open",
        specs: [
            "40 high-quality sheets",
            "Bright white paper",
            "A4 standard size",
            "Ideal for pencils and crayons"
        ]
    },
    166: {
        name: "Water Bottle (Kids) #17",
        category: "Stationery",
        bulk: 35,
        retail: 70,
        online: 85,
        description: "Plastic, cartoon print, 500ml",
        icon: "tint",
        specs: [
            "Leak-proof and durable",
            "500ml capacity",
            "Attractive cartoon design",
            "Safe BPA-free plastic"
        ]
    },
    167: {
        name: "Kids School Bag #17",
        category: "Stationery",
        bulk: 180,
        retail: 250,
        online: 300,
        description: "3 compartments, soft padded, cartoon themed",
        icon: "school",
        specs: [
            "Three large compartments",
            "Soft padded straps",
            "Attractive cartoon themes",
            "Lightweight and spacious"
        ]
    },
    168: {
        name: "Geometry Box #17",
        category: "Stationery",
        bulk: 30,
        retail: 50,
        online: 65,
        description: "Compass, scale, protractor, divider",
        icon: "ruler-combined",
        specs: [
            "Complete geometric tools",
            "Durable plastic case",
            "Ideal for school exams",
            "Accurate measurements"
        ]
    },
    169: {
        name: "Coloring Book #17",
        category: "Stationery",
        bulk: 25,
        retail: 40,
        online: 50,
        description: "20 activity pages, for age 4-10",
        icon: "book",
        specs: [
            "Educational activities",
            "Bold line illustrations",
            "Encourages creativity",
            "Child-friendly themes"
        ]
    },
    170: {
        name: "Pencil Box #17",
        category: "Stationery",
        bulk: 20,
        retail: 40,
        online: 55,
        description: "Double compartment, magnetic lock",
        icon: "box",
        specs: [
            "Stylish and sturdy design",
            "Magnetic lock system",
            "Holds pencils and tools",
            "Spacious dual compartments"
        ]
    },
    171: {
        name: "HB Pencil #18",
        category: "Stationery",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "HB grade, wooden body, pack of 10",
        icon: "pencil-alt",
        specs: [
            "Premium graphite core",
            "Perfect for daily use",
            "Polished wooden body",
            "Smooth sharpening"
        ]
    },
    172: {
        name: "Eraser #18",
        category: "Stationery",
        bulk: 1,
        retail: 3,
        online: 4,
        description: "Soft rubber, dust-free",
        icon: "eraser",
        specs: [
            "Clean and precise erasing",
            "Dust-free performance",
            "Compact for pencil cases",
            "Safe for paper surfaces"
        ]
    },
    173: {
        name: "Sharpener #18",
        category: "Stationery",
        bulk: 2,
        retail: 5,
        online: 6,
        description: "Single blade, plastic body",
        icon: "cut",
        specs: [
            "One-hole design",
            "Easy to hold",
            "Smooth sharpening",
            "Durable plastic construction"
        ]
    },
    174: {
        name: "12-Color Crayon Set #18",
        category: "Stationery",
        bulk: 10,
        retail: 20,
        online: 25,
        description: "Non-toxic, oil-based colors",
        icon: "palette",
        specs: [
            "Soft glide application",
            "Bold color payoff",
            "Non-toxic certified",
            "Easy to grip"
        ]
    },
    175: {
        name: "A4 Drawing Book #18",
        category: "Stationery",
        bulk: 20,
        retail: 35,
        online: 45,
        description: "40 pages, white drawing sheets",
        icon: "book-open",
        specs: [
            "Thick white paper",
            "Suitable for mixed media",
            "Spiral binding",
            "Portable and lightweight"
        ]
    },
    176: {
    name: "Water Bottle (Kids) #18",
    category: "Stationery",
    bulk: 35,
    retail: 70,
    online: 85,
    description: "Plastic, cartoon print, 500ml",
    icon: "tint",
    specs: [
        "Leak-proof plastic design",
        "500ml capacity",
        "Colorful cartoon print",
        "BPA-free material"
    ]
    },
    177: {
    name: "Kids School Bag #18",
    category: "Stationery",
    bulk: 180,
    retail: 250,
    online: 300,
    description: "3 compartments, soft padded, cartoon themed",
    icon: "school",
    specs: [
        "Spacious compartments",
        "Adjustable padded straps",
        "Cartoon print theme",
        "Durable and lightweight"
    ]
    },
    178: {
    name: "Geometry Box #18",
    category: "Stationery",
    bulk: 30,
    retail: 50,
    online: 65,
    description: "Compass, scale, protractor, divider",
    icon: "ruler-combined",
    specs: [
        "Complete set of instruments",
        "Durable plastic components",
        "Compact box with storage",
        "Ideal for school use"
    ]
    },
    179: {
    name: "Coloring Book #18",
    category: "Stationery",
    bulk: 25,
    retail: 40,
    online: 50,
    description: "20 activity pages, for age 4-10",
    icon: "book",
    specs: [
        "Engaging coloring activities",
        "20 pages of fun",
        "Child-friendly designs",
        "For ages 4 to 10"
    ]
    },
    180: {
    name: "Pencil Box #18",
    category: "Stationery",
    bulk: 20,
    retail: 40,
    online: 55,
    description: "Double compartment, magnetic lock",
    icon: "box",
    specs: [
        "Stylish and secure",
        "Magnetic closure",
        "Double storage compartments",
        "Fits pens, pencils, and erasers"
    ]
    },
    181: {
    name: "HB Pencil #19",
    category: "Stationery",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "HB grade, wooden body, pack of 10",
    icon: "pencil-alt",
    specs: [
        "High-quality graphite",
        "Standard HB grade",
        "Wooden casing",
        "Ideal for school use"
    ]
    },
    182: {
    name: "Eraser #19",
    category: "Stationery",
    bulk: 1,
    retail: 3,
    online: 4,
    description: "Soft rubber, dust-free",
    icon: "eraser",
    specs: [
        "Gentle on paper",
        "Dust-free performance",
        "Compact design",
        "Great for students"
    ]
    },
    183: {
    name: "Sharpener #19",
    category: "Stationery",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "Single blade, plastic body",
    icon: "cut",
    specs: [
        "One-hole sharpener",
        "Stainless steel blade",
        "Durable plastic housing",
        "Lightweight and easy to carry"
    ]
    },
    184: {
    name: "12-Color Crayon Set #19",
    category: "Stationery",
    bulk: 10,
    retail: 20,
    online: 25,
    description: "Non-toxic, oil-based colors",
    icon: "palette",
    specs: [
        "Oil-based vibrant crayons",
        "Non-toxic and safe",
        "Smooth coloring experience",
        "Perfect for young artists"
    ]
    },
    185: {
    name: "A4 Drawing Book #19",
    category: "Stationery",
    bulk: 20,
    retail: 35,
    online: 45,
    description: "40 pages, white drawing sheets",
    icon: "book-open",
    specs: [
        "High-quality white paper",
        "Ideal for drawing and sketching",
        "40 perforated sheets",
        "Size: A4"
    ]
    },
    186: {
    name: "Water Bottle (Kids) #19",
    category: "Stationery",
    bulk: 35,
    retail: 70,
    online: 85,
    description: "Plastic, cartoon print, 500ml",
    icon: "tint",
    specs: [
        "Durable plastic body",
        "Fun cartoon graphics",
        "Spill-proof design",
        "Kid-friendly build"
    ]
    },
    187: {
    name: "Kids School Bag #19",
    category: "Stationery",
    bulk: 180,
    retail: 250,
    online: 300,
    description: "3 compartments, soft padded, cartoon themed",
    icon: "school",
    specs: [
        "3 large zippered compartments",
        "Padded shoulder straps",
        "Colorful cartoon theme",
        "Durable fabric"
    ]
    },
    188: {
    name: "Geometry Box #19",
    category: "Stationery",
    bulk: 30,
    retail: 50,
    online: 65,
    description: "Compass, scale, protractor, divider",
    icon: "ruler-combined",
    specs: [
        "Essential geometry tools",
        "Clear measurements",
        "Reusable box",
        "Sturdy plastic tools"
    ]
    },
    189: {
    name: "Coloring Book #19",
    category: "Stationery",
    bulk: 25,
    retail: 40,
    online: 50,
    description: "20 activity pages, for age 4-10",
    icon: "book",
    specs: [
        "20 colorful pages",
        "Creative and fun designs",
        "Ideal for kids ages 4+",
        "Encourages imagination"
    ]
    },
    190: {
    name: "Pencil Box #19",
    category: "Stationery",
    bulk: 20,
    retail: 40,
    online: 55,
    description: "Double compartment, magnetic lock",
    icon: "box",
    specs: [
        "Magnetic flap lock",
        "Stylish finish",
        "Spacious compartments",
        "Durable plastic"
    ]
    },
    191: {
    name: "HB Pencil #20",
    category: "Stationery",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "HB grade, wooden body, pack of 10",
    icon: "pencil-alt",
    specs: [
        "HB lead quality",
        "Wooden casing",
        "Pack of 10",
        "Perfect for writing and drawing"
    ]
    },
    192: {
    name: "Eraser #20",
    category: "Stationery",
    bulk: 1,
    retail: 3,
    online: 4,
    description: "Soft rubber, dust-free",
    icon: "eraser",
    specs: [
        "Smooth rubber texture",
        "Dust-free erasing",
        "Compact design",
        "Gentle on paper"
    ]   
    },
    193: {
    name: "Sharpener #20",
    category: "Stationery",
    bulk: 2,
    retail: 5,
    online: 6,
    description: "Single blade, plastic body",
    icon: "cut",
    specs: [
        "Single sharp blade",
        "Plastic body",
        "Simple and safe",
        "Easy to use"
    ]
    },
    194: {
    name: "12-Color Crayon Set #20",
    category: "Stationery",
    bulk: 10,
    retail: 20,
    online: 25,
    description: "Non-toxic, oil-based colors",
    icon: "palette",
    specs: [
        "12 vibrant colors",
        "Non-toxic",
        "Oil-based",
        "Ideal for kids"
    ]
    },
    195: {
    name: "A4 Drawing Book #20",
    category: "Stationery",
    bulk: 20,
    retail: 35,
    online: 45,
    description: "40 pages, white drawing sheets",
    icon: "book-open",
    specs: [
        "A4 size",
        "40 white sheets",
        "Smooth paper",
        "Ideal for sketching"
    ]
    },
    196: {
    name: "Water Bottle (Kids) #20",
    category: "Stationery",
    bulk: 35,
    retail: 70,
    online: 85,
    description: "Plastic, cartoon print, 500ml",
    icon: "tint",
    specs: [
        "500ml capacity",
        "Cartoon print",
        "Leak-proof lid",
        "Safe plastic"
    ]
    },
    197: {
    name: "Kids School Bag #20",
    category: "Stationery",
    bulk: 180,
    retail: 250,
    online: 300,
    description: "3 compartments, soft padded, cartoon themed",
    icon: "school",
    specs: [
        "3 roomy compartments",
        "Soft padding",
        "Colorful theme",
        "Comfortable to carry"
    ]
    },
    198: {
    name: "Geometry Box #20",
    category: "Stationery",
    bulk: 30,
    retail: 50,
    online: 65,
    description: "Compass, scale, protractor, divider",
    icon: "ruler-combined",
    specs: [
        "Compass & Divider",
        "Scale and protractor",
        "Durable case",
        "Perfect for geometry"
    ]
    },
    199: {
    name: "Coloring Book #20",
    category: "Stationery",
    bulk: 25,
    retail: 40,
    online: 50,
    description: "20 activity pages, for age 4-10",
    icon: "book",
    specs: [
        "20 interactive pages",
        "Designed for kids 4-10",
        "Engaging illustrations",
        "Stimulates creativity"
    ]
    },
    200: {
    name: "Pencil Box #20",
    category: "Stationery",
    bulk: 20,
    retail: 40,
    online: 55,
    description: "Double compartment, magnetic lock",
    icon: "box",
    specs: [
        "2 compartments",
        "Magnetic closure",
        "Compact and organized",
        "Perfect for students"
    ]
}

};
