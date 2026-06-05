
export type Product = {
  name: string;
  slug: string;
  image: string;
  shortDescription: string;
};

export type ProductGroup = {
  title: string;
  slug: string;
  products: Product[];
};

export type ProductOrganization = {
  organization: string;
  slug: string;
  description: string;
  groups: ProductGroup[];
};

export const productOrganizations = [

  {
    organization: "Fieldman Induction",

    slug: "fieldman-induction",

    description:
      "Induction furnace systems, heating solutions and furnace spares.",

    groups: [

      {
        title: "Induction Furnace",

        slug: "induction-furnace",

        products: [

          {
            name: "Furnace Assembly",

            slug: "furnace-assembly",

            image: "/products/furnace-assembly.jpg",

            shortDescription:
              "Industrial furnace assembly systems designed for steel melting operations."
          },

          {
            name: "Furnace Coil",

            slug: "furnace-coil",

            image: "/products/furnace-coil.jpg",

            shortDescription:
              "High-performance induction furnace coils engineered for industrial applications."
          },

          {
            name: "Water Cooled Cable",

            slug: "water-cooled-cable",

            image: "/products/water-cooled-cable.jpg",

            shortDescription:
              "Efficient water cooled cable systems for reliable furnace performance."
          }

        ]
      },

      {
        title: "Heating Spares",

        slug: "heating-spares",

        products: [

          {
            name: "Heating Furnace Spares",

            slug: "heating-furnace-spares",

            image: "/products/heating-furnace-spares.jpg",

            shortDescription:
              "Premium industrial heating furnace spare parts for continuous operations."
          },

          {
            name: "Lead Adaptors",

            slug: "lead-adaptors",

            image: "/products/lead-adaptors.jpg",

            shortDescription:
              "Durable industrial lead adaptors for heavy-duty engineering systems."
          },

          {
            name: "Selector Switch",

            slug: "selector-switch",

            image: "/products/selector-switch.jpg",

            shortDescription:
              "Industrial selector switches designed for precision operational control."
          }

        ]
      }

    ]
  },

  {
    organization: "Fieldman Sensors",

    slug: "fieldman-sensors",

    description:
      "Industrial automation, instrumentation and sensing solutions.",

    groups: [

      {
        title: "Automation Systems",

        slug: "automation-systems",

        products: [

          {
            name: "Temperature Controllers",

            slug: "temperature-controllers",

            image: "/products/temp-controller.jpg",

            shortDescription:
              "Precision temperature controllers for industrial automation systems."
          },

          {
            name: "Proximity Sensors",

            slug: "proximity-sensors",

            image: "/products/proximity-sensor.jpg",

            shortDescription:
              "Reliable proximity sensing systems for manufacturing automation."
          }

        ]
      }

    ]
  }

];