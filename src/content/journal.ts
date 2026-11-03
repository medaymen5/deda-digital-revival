// Journal articles migrated from deda.tn. legacyUrl keeps the old address for redirects.
export type JournalBlock = { type: "paragraph" | "heading"; text: string } | { type: "image"; image: string };
export type JournalCategory = "Heritage" | "Artisans" | "Ethics";
export type JournalPost = { slug: string; title: string; date: string; category: JournalCategory; cover: string | null; excerpt: string; blocks: JournalBlock[]; legacyUrl: string };
export const journal: JournalPost[] = [
  {
    "slug": "reclaiming-craft-ecole-elegance",
    "title": "Reclaiming Craft: Inside DEDA’s Collaboration with École Élégance",
    "date": "2026-04-18",
    "category": "Artisans",
    "cover": "journal-ecole-elegance-1",
    "excerpt": "At the core of DEDA’s ethos lies a profound belief in the power of artisanal craft—an art form that weaves human skill, creativity, and heritage into every stitch. Today, we proudly announce a transformative collaboratio",
    "blocks": [
      {
        "type": "paragraph",
        "text": "At the core of DEDA’s ethos lies a profound belief in the power of artisanal craft—an art form that weaves human skill, creativity, and heritage into every stitch. Today, we proudly announce a transformative collaboration with École Élégance, a beacon of couture education in Kélibia. This partnership is not just about acquiring skills; it is a shared mission to revive the artisan spirit, countering the tide of industrialization that risks leaving these crafts behind."
      },
      {
        "type": "heading",
        "text": "The Story Behind École Élégance"
      },
      {
        "type": "paragraph",
        "text": "Madame Afifa Bouafif, the visionary founder of École Élégance, embodies this lifelong commitment. After six years of rigorous training—three years in Formation Professionnelle Coupe Couture followed by three years of pedagogical training—she graduated in 1986 from the École des Cadres Étatiques. When the government program was later canceled, she continued her journey independently, opening her own atelier and dedicating over 30 years to both practicing and informally transmitting her knowledge."
      },
      {
        "type": "paragraph",
        "text": "In 2000, driven by a clear gap in structured couture education and a deep desire to teach, she founded École Élégance. For over 40 years, her work—between atelier and school—has shaped generations of artisans. Today, the school graduates around 60 young women each year. Yet, this transmission has not been untouched by change. Where classes once included both men and women and counted around 40 students, today they average closer to 25, reflecting a steady decline in enrollment. More broadly, fewer young people are choosing this path, reflecting a growing withdrawal from artisanal professions in the face of industrialization."
      },
      {
        "type": "image",
        "image": "journal-ecole-elegance-2"
      },
      {
        "type": "heading",
        "text": "One Shared Vision : Transmission of Savoir-faire"
      },
      {
        "type": "paragraph",
        "text": "As Madame Afifa expressed so clearly, “We share one common concern: the withdrawal of artisanship in the face of industrialization.” This conviction binds École Élégance and DEDA in a shared vision—one where the handmade is not only preserved, but reaffirmed as essential."
      },
      {
        "type": "paragraph",
        "text": "This collaboration is a natural extension of DEDA’s commitment to human-centered creation. The school represents a living ecosystem of knowledge and discipline and serves as a trusted reference for identifying and engaging skilled artisans. Through Madame Afifa’s network and expertise, DEDA is able to connect with talents whose training is built on precision, patience, and respect for the craft."
      },
      {
        "type": "image",
        "image": "journal-ecole-elegance-3"
      },
      {
        "type": "heading",
        "text": "Continuing to Evolve Through Initiatives"
      },
      {
        "type": "paragraph",
        "text": "One of the most meaningful expressions of this collaboration lies in direct support. DEDA is currently sponsoring the training of a young woman at École Élégance, enabling her to specialize in embroidery. Alongside her studies, she is completing her apprenticeship within DEDA, allowing for a continuous exchange between learning and practice. This model reflects a deeper intention: to invest not only in production, but in people, and in the long-term transmission of savoir-faire."
      },
      {
        "type": "paragraph",
        "text": "Looking ahead, this partnership will continue to evolve through initiatives such as community workshops and intergenerational exchanges. These future programs aim to reconnect younger audiences with the value of handcraft, creating spaces where knowledge can circulate and where new vocations can emerge."
      },
      {
        "type": "image",
        "image": "journal-ecole-elegance-4"
      },
      {
        "type": "paragraph",
        "text": "In every stitch, every gesture, and every artisan who chooses this path, there is resistance—and there is hope. Through this collaboration, DEDA and École Élégance are not only preserving a craft, but actively participating in shaping its future."
      }
    ],
    "legacyUrl": "https://deda.tn/2026/04/18/local-sourcing-environmental-respect-and-community-support-the-ethics-of-deda-2/"
  },
  {
    "slug": "ethics-of-deda",
    "title": "Local Sourcing, Environmental Respect, and Community Support: The Ethics of DEDA",
    "date": "2026-03-09",
    "category": "Ethics",
    "cover": "journal-ethics-of-deda-1",
    "excerpt": "At DEDA, every creation begins with a conscious choice. Beyond aesthetics and craftsmanship, our work is guided by a commitment to responsible sourcing, environmental respect, and support for local communities. These val",
    "blocks": [
      {
        "type": "paragraph",
        "text": "At DEDA, every creation begins with a conscious choice. Beyond aesthetics and craftsmanship, our work is guided by a commitment to responsible sourcing, environmental respect, and support for local communities. These values are not simply part of our philosophy—they shape the way we design, produce, and share our collections."
      },
      {
        "type": "heading",
        "text": "Rooted in Local Sourcing"
      },
      {
        "type": "paragraph",
        "text": "DEDA prioritizes sourcing materials locally whenever possible. Working closely with regional suppliers allows us to reduce transportation distances, support local economies, and maintain a direct relationship with the origins of our fabrics and materials."
      },
      {
        "type": "paragraph",
        "text": "Local sourcing also helps preserve traditional knowledge and regional textile heritage. By collaborating with Tunisian artisans, fabric providers, and small workshops, we help sustain skills that have been passed down for generations. Each piece reflects not only thoughtful design but also the hands and expertise of local communities who contribute to its creation."
      },
      {
        "type": "paragraph",
        "text": "We are aware that some of our suppliers may import certain materials or components from abroad. While this reflects the reality of today’s global supply chains, our long-term vision remains clear: to identify, encourage, and prioritize as many locally produced materials and services as possible. We actively seek out Tunisian suppliers and craftsmen who share our values, and we continuously explore opportunities to strengthen local sourcing."
      },
      {
        "type": "paragraph",
        "text": "Tunisia possesses a deep and resourceful tradition of craftsmanship. From textile knowledge to artisanal techniques, the country’s creative heritage offers immense potential. At DEDA, we believe that these traditions deserve to be revived, valued, and integrated into contemporary design."
      },
      {
        "type": "image",
        "image": "journal-ethics-of-deda-2"
      },
      {
        "type": "heading",
        "text": "Respect for the Environment"
      },
      {
        "type": "paragraph",
        "text": "Environmental responsibility is central to DEDA’s approach to fashion. In an industry often defined by overproduction and waste, we follow a different path—one focused on mindful creation and natural materials."
      },
      {
        "type": "paragraph",
        "text": "Whenever possible, we prioritize natural fabrics such as linen, cotton, and silk. These materials not only offer durability and comfort but also align with a more respectful relationship with the environment. Natural fibers age beautifully, allowing garments to be worn and appreciated for many years rather than seasons."
      },
      {
        "type": "paragraph",
        "text": "Our production model is intentionally small-scale. By creating limited quantities and focusing on quality rather than volume, we reduce unnecessary production and minimize waste. Packaging is also approached thoughtfully, favoring materials that are simple, recyclable, and environmentally conscious."
      },
      {
        "type": "paragraph",
        "text": "This philosophy reflects a broader belief: fashion should not come at the expense of the planet. Instead, it should coexist with nature through thoughtful design and responsible production."
      },
      {
        "type": "image",
        "image": "journal-ethics-of-deda-3"
      },
      {
        "type": "heading",
        "text": "Supporting Local Businesses"
      },
      {
        "type": "paragraph",
        "text": "DEDA is deeply connected to the local entrepreneurial ecosystem. From fabric suppliers and tailors to photographers, packaging producers, and logistics providers, many small businesses contribute to the journey of each garment."
      },
      {
        "type": "paragraph",
        "text": "Supporting these partners is an essential part of our mission. By collaborating with local professionals and independent artisans, we help create opportunities, strengthen creative networks, and encourage sustainable economic activity within the community."
      },
      {
        "type": "paragraph",
        "text": "These collaborations also reflect a broader commitment: valuing craftsmanship and human expertise over purely industrial production models. By working closely with artisans and small businesses, we contribute—modestly but meaningfully—to preserving traditional techniques that risk disappearing in the face of mass-produced and imported materials."
      },
      {
        "type": "heading",
        "text": "A Conscious Vision of Fashion"
      },
      {
        "type": "paragraph",
        "text": "DEDA’s vision goes beyond creating garments. It is about building a responsible fashion practice rooted in heritage, community, and environmental respect."
      },
      {
        "type": "paragraph",
        "text": "Through local sourcing, sustainable materials, and partnerships with local businesses, DEDA strives to demonstrate that fashion can be both refined and responsible. We believe that Tunisia’s rich artisanal culture holds the key to a more meaningful and sustainable future for fashion."
      },
      {
        "type": "paragraph",
        "text": "Every piece tells a story—not only of design and craftsmanship, but of the people, materials, and values that bring it to life."
      }
    ],
    "legacyUrl": "https://deda.tn/2026/03/09/local-sourcing-environmental-respect-and-community-support-the-ethics-of-deda/"
  },
  {
    "slug": "fatma-hergli",
    "title": "Fatma Hergli, Embroidery Artisan",
    "date": "2025-12-15",
    "category": "Artisans",
    "cover": "journal-fatma-hergli-cover",
    "excerpt": "I went to school in 1985 to learn sewing and embroidery. I studied for three years in Hammamet, where embroidery is part of our traditions and daily life. From the beginning, embroidery stayed with me more than sewing. I",
    "blocks": [
      {
        "type": "paragraph",
        "text": "I went to school in 1985 to learn sewing and embroidery. I studied for three years in Hammamet, where embroidery is part of our traditions and daily life. From the beginning, embroidery stayed with me more than sewing. I liked sitting quietly with the work, repeating the same movements until my hands felt at ease."
      },
      {
        "type": "paragraph",
        "text": "After finishing school and getting my diploma, I continued working from home in Hammamet. I never stopped. This work became part of my days, something I return to naturally, without forcing it."
      },
      {
        "type": "paragraph",
        "text": "I truly love what I do. I put my heart into every piece I embroider. With time, my hands learned to be patient and precise. What I make today carries years of practice, but also the passion I have always felt for this work."
      }
    ],
    "legacyUrl": "https://deda.tn/2025/12/15/fatma-hergli/"
  },
  {
    "slug": "nabila-hamhoum",
    "title": "Nabila Hamhoum, Sewing and Couture Artisan",
    "date": "2025-12-05",
    "category": "Artisans",
    "cover": "journal-nabila-hamhoum-cover",
    "excerpt": "I am 52 years old. I am married, and I have three children. I studied sewing and couture for six years. I loved this work from the start, and that love has only grown with time.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "I am 52 years old. I am married, and I have three children. I studied sewing and couture for six years. I loved this work from the start, and that love has only grown with time."
      },
      {
        "type": "paragraph",
        "text": "After my studies, I opened my own atelier and worked with clients. Later, I began teaching sewing to girls from rural areas. I believe sewing is more than a job, it is something that gives dignity, confidence, and independence."
      },
      {
        "type": "paragraph",
        "text": "Today, after more than 30 years, I still sew every day, from morning until night. I do this work with my whole heart. Each piece I make carries my attention, my emotions, and the passion I feel every time I sit in front of my machine."
      }
    ],
    "legacyUrl": "https://deda.tn/2025/12/05/nabila-hamhoum/"
  },
  {
    "slug": "les-costumes-traditionnels-feminins-de-tunisie",
    "title": "Les Costumes Traditionnels Féminins de Tunisie",
    "date": "2025-11-27",
    "category": "Heritage",
    "cover": "journal-costumes-traditionnels-cover",
    "excerpt": "A key reference book that explores the richness and diversity of Tunisian women’s dress across regions and traditions. Through historical research and visual documentation, the book highlights how garments embody identit",
    "blocks": [
      {
        "type": "paragraph",
        "text": "A key reference book that explores the richness and diversity of Tunisian women’s dress across regions and traditions. Through historical research and visual documentation, the book highlights how garments embody identity, heritage, and ancestral craftsmanship. More than clothing, these costumes reflect the social, cultural, and symbolic roles of Tunisian women, values that closely resonate with Maison DEDA’s approach to honoring tradition while reinterpreting it in a contemporary language."
      },
      {
        "type": "paragraph",
        "text": "The publication is a collective work, bringing together historians, ethnologists, anthropologists, and heritage specialists, notablyAziza Ben Tarfous, Dalenda Largueche, Sonia Zarg Ayouna, and other Tunisian researchers."
      }
    ],
    "legacyUrl": "https://deda.tn/2025/11/27/les-costumes-traditionnels-feminins-de-tunisie/"
  }
];

export const getPost = (slug: string) => journal.find((p) => p.slug === slug);
