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
  //  Fieldman Induction

  {
    organization: "Fieldman Induction",

    slug: "fieldman-induction",

    description:
      "Fieldman Induction has emerged as a distinguished name in the realm of manufacturing, specializing in high-quality induction furnace spares. ",
    // Having a large manufacturing facility with, high-end machinery, and a well-designed infrastructure our organization is well-equipped for efficient production. State-of-the-art manufacturing facility exemplifies its core values, integrating customer service, quality, reliability, value, and cutting-edge design and technology. ",

    groups: [
      // Induction Furnace Assembly
      {
        title: "Induction Furnace Assembly",

        slug: "induction-furnace-assembly",

        products: [
          {
            name: "Steel Melting Furnace Assembly",

            slug: "steel-melting-furnace-assembly",

            image: "/steel-melting-furnace-assembly.png",

            shortDescription:
              "Industrial furnace assembly systems designed for steel melting operations.",
          },

          {
            name: "Brass/Copper Melting Furnace Assembly",

            slug: "brass-copper-melting-furnace-assembly",

            image: "/brass-melting-furnace-assembly.png",

            shortDescription:
              "High-performance induction furnace coils engineered for industrial applications.",
          },

          {
            name: "Aluminum  Melting Furnace Assembly",

            slug: "aluminum-melting-furnace-assembly",

            image: "/aluminum-melting-furnace-assembly.png",

            shortDescription:
              "Efficient water cooled cable systems for reliable furnace performance.",
          },
        ],
      },

      // Induction Furnace Coil
      {
        title: "Induction Furnace Coil",

        slug: "induction-furnace-coil",

        products: [
          {
            name: "Melting furnace coil ",

            slug: "melting-furnace-coil",

            image: "/melting-furnace-coil.png",

            shortDescription:
              "Our Induction Melting Furnace Coils are meticulously crafted using high-grade copper and top-quality materials.",
          },

          {
            name: "Steel frame furnace coils",

            slug: "steel-furnace-coil",

            image: "/steel-furnace-coil.png",

            shortDescription:
              "Our Induction Melting Furnace Coils are meticulously crafted using high-grade copper and top-quality materials..",
          },

          {
            name: "Small furnace coil ",

            slug: "small-furnace-coil",

            image: "/small-furnace-coil.png",

            shortDescription:
              "Our Induction Melting Furnace Coils are meticulously crafted using high-grade copper and top-quality materials.",
          },
        ],
      },

      // Furnace Refractory Casting
      {
        title: "Furnace Refractory Casting",

        slug: "furnace-refractory-casting",

        products: [
          {
            name: "Furnace Top Cast",

            slug: "furnace-top-cast",

            image: "/furnace-top-cast.png",

            shortDescription: "furnace-top-cast",
          },

          {
            name: "Furnace Bottom Cast",

            slug: "furnace-bottom-cast",

            image: "/furnace-bottom-cast.png",

            shortDescription: "furnace-bottom-cast",
          },

          {
            name: "Refractory Top Cast Ring Set ",

            slug: "refractory-top-cast-ring-set",

            image: "/refractory-top-cast-ring-set.png",

            shortDescription: "refractory-top-cast-ring-set",
          },
          // {
          //   name: "Refractory Bottom Cast Ring Set ",

          //   slug: "refractory-bottom-cast-ring-set",

          //   image: "/refractory-bottom-cast-ring-set.png",

          //   shortDescription: "refractory-bottom-cast-ring-set",
          // },
          // {
          //   name: "Pusher Block Casting ",

          //   slug: "pusher-block-casting",

          //   image: "/pusher-block-casting.png",

          //   shortDescription: "pusher-block-casting",
          // },
        ],
      },

      // Magnetic Components
      {
        title: "Magnetic Components",

        slug: "magnetic-Components",

        products: [
          {
            name: "Magnetic Shunt / Yoke ",

            slug: "magnetic-shunt-yoke",

            image: "/magnetic-shunt-yoke.png",

            shortDescription:
              "Our Induction Melting Furnace Coils are meticulously crafted using high-grade copper and top-quality materials.",
          },

          {
            name: "Current Limiting Reactor (CLR)",

            slug: "current-limiting-reactor",

            image: "/current-limiting-reactor.png",

            shortDescription: "current-limiting-reactor",
          },

          {
            name: " Di/Dt , SCP , CHOKE , High Frequency Timer (HFT) ",

            slug: "high-frequency-timer",

            image: "/di-dt-hcp.png",

            shortDescription: "high-frequency-timer",
          },
          {
            name: "Yoke Insulation pad ",

            slug: "yoke-insulation-pad",

            image: "/yoke-insulation-pad.png",

            shortDescription: "yoke-insulation-pad",
          },
        ],
      },

      // Furnace Assembly Parts
      {
        title: "Furnace Assembly Parts",

        slug: "furnace-assembly-parts",

        products: [
          {
            name: "furnace-stanchion-assembly",

            slug: "furnace-stanchion-assembly",

            image: "/furnace-stanchion-assembly.png",

            shortDescription: "furnace-stanchion-assembly",
          },

          {
            name: "Aluminum Side Plates",

            slug: "aluminum-side-plates",

            image: "/aluminum-side-plates.png",

            shortDescription: "aluminum-side-plates",
          },

          {
            name: "Trunnion Assembly",

            slug: "trunnion-assembly",

            image: "/trunnion-assembly.png",

            shortDescription: "trunnion-assembly",
          },
          {
            name: "Aluminum Front Cover",

            slug: "aluminum-front-plates",

            image: "/aluminum-front-plates.png",

            shortDescription: "aluminum-front-plates",
          },
          {
            name: "Aluminum Bottom Support Bracket",

            slug: "aluminum-bottom-support-bracket",

            image: "/aluminum-bottom-support-bracket.png",

            shortDescription: "aluminum-bottom-support-bracket",
          },
          {
            name: "SS Spout",

            slug: "ss-spout",

            image: "/ss-spout.png",

            shortDescription: "ss-spout",
          },
        ],
      },

      // Furnace Switches & WCL
      {
        title: "Furnace Switches & WCL",

        slug: "furnace-switches-wcl",

        products: [
          {
            name: "Furnace Switch",

            slug: "furnace-switch",

            image: "/furnace-input-switch.png",

            shortDescription: "furnace-switch",
          },

          // {
          //   name: "Isolation Switch",

          //   slug: "isolation-switch",

          //   image: "/isolation-switch.png",

          //   shortDescription: "isolation-switch",
          // },

          {
            name: "Selector Switch & Blades",

            slug: "selector-switch-blades",

            image: "/selector-switch-blades.png",

            shortDescription: "selector-switch-blades",
          },
          {
            name: "Water Cool Lead & Accessories ",

            slug: "water-cool-lead",

            image: "/water-cool-lead-adapter-accessories.png",

            shortDescription: "water-cool-lead",
          },
          // {
          //   name: "Bus Bar Adapter",

          //   slug: "bus-bar-adapter",

          //   image: "/bus-bar-adapter.png",

          //   shortDescription: "bus-bar-adapter",
          // },
          // {
          //   name: "Carbon Free Hose",

          //   slug: "carbon-free-hose",

          //   image: "/carbon-free-hose.png",

          //   shortDescription: "carbon-free-hose",
          // },
          // {
          //   name: "Other WCL Components",

          //   slug: "other-wlc-components",

          //   image: "/other-wlc-components.png",

          //   shortDescription: "other-wlc-components",
          // },
        ],
      },

      // Furnace Insulation Spare
      {
        title: "Furnace Insulation Spare",

        slug: "furnace-insulation-spare",

        products: [
          {
            name: "induction-furnace-coil-insulation",

            slug: "furnace-insulation-spare",

            image: "/induction-furnace-coil-insulation.png",
            shortDescription: "Permali & FRP Coil Support",

            // shortDescription: [
            //   "Permali & FRP Coil Support",
            //   "Flexocoat & Biosphinol",
            //   "FRP / Silicon / Woven Tape",
            // ],
          },

          {
            name: "hardware-frp-material-syndanio ",

            slug: "frp-mica-syndaniosheets",

            image: "/hardware-frp-material-syndanio.png",

            shortDescription: "FRP / Mica / Syndanio Sheets",

            // shortDescription: [
            //   "FRP / Mica / Syndanio Sheets",
            //   "Permali TEE , Eye Bolt , Set Collar",
            //   "FRP / Mica Tube & Washer",
            //   "Teflon & Non Asbestos Sheet",
            //   "FRP & Syndanio Spacers",
            //   "SS & Brass Hardware",
            // ],
          },
        ],
      },

      // Furnace Hydraulic Parts
      {
        title: "Furnace Hydraulic Parts",

        slug: "furnace-hydraulic-parts",

        products: [
          {
            name: "Hydraulic Cylinder & Aluminium Cover",

            slug: "hydraulic-cylinder",

            image: "/hydraulic-cylinder-cover.png",

            shortDescription: "hydraulic-cylinder",
          },

          {
            name: "Hydraulic Power pack Unit",

            slug: "hydraulic-power-pack-unit",

            image: "/hydraulic-power-pack-unit.png",

            shortDescription: "hydraulic-power-pack-unit",
          },

          {
            name: "Pivot & Rod end Block",

            slug: "pivot-rod-end-block",

            image: "/pivot-rod-end-block.png",

            shortDescription: "pivot-rod-end-block",
          },
          // {
          //   name: "Cylinder Shroud ",

          //   slug: "cylinder-shroud",

          //   image: "/cylinder-shroud.png",

          //   shortDescription: "cylinder-shroud",
          // },
          {
            name: "Hydraulic Flexible Hoses  & Seal kits ",

            slug: "hydraulic-flexible-hoses",

            image: "/hydraulic-flexible-hoses-seal-kits.png",

            shortDescription: "hydraulic-flexible-hoses",
          },
          // {
          //   name: " ",

          //   slug: "seal-kits-seals",

          //   image: "/seal-kits-seals.png",

          //   shortDescription: "seal-kits-seals",
          // },
          // {
          //   name: "Valves & Bearings",

          //   slug: "valves-bearings",

          //   image: "/valves-bearings.png",

          //   shortDescription: "valves-bearings",
          // },
          {
            name: "Hydraulic Fittings ",

            slug: "hydraulic-fittings",

            image: "/hydraulic-fittings.png",

            shortDescription: "hydraulic-fittings",
          },
        ],
      },

      //  Power Components & Sensors
      {
        title: "Power Components & Sensors",

        slug: "power-components-sensors",

        products: [
          {
            name: "Power Components & Sensors",

            slug: "thyristor-diode-fuse",

            image: "/power-components-sensors.png",

            shortDescription: "Thyristor , Diode & Fuse", 

            // shortDescription: [
            //   "thyristor-diode-fuse",
            //   "Thyristor , Diode & Fuse",
            //   "SCR & Diode Clamp Assembly",
            //   "Chill Blocks",
            //   "Temperature  Sensors",
            //   "Temperature Gauges",
            //   "Pressure Switch & Gauge",
            //   "Flow Switch",
            // ],
          },

          // {
          //   name: "SCR & Diode Clamp Assembly",

          //   slug: "scr-diode-clamp-assembly",

          //   image: "/scr-diode-clamp-assembly.png",

          //   shortDescription: "scr-diode-clamp-assembly",
          // },

          // {
          //   name: "Chill Blocks",

          //   slug: "chill-blocks",

          //   image: "/chill-blocks.png",

          //   shortDescription: "chill-blocks",
          // },
          // {
          //   name: "Temperature  Sensors /switches",

          //   slug: "temperature-sensors-switches",

          //   image: "/temperature-sensors-switches.png",

          //   shortDescription: "temperature-sensors-switches",
          // },
          // {
          //   name: "Temperature Gauges",

          //   slug: "temperature-gauges",

          //   image: "/temperature-gauges.png",

          //   shortDescription: "temperature-gauges",
          // },
          // {
          //   name: "Pressure Switch & Gauge",

          //   slug: "pressure-switch-gauge",

          //   image: "/pressure-switch-gauge.png",

          //   shortDescription: "pressure-switch-gauge",
          // },
          // {
          //   name: "Flow Switch",

          //   slug: "flow-switch",

          //   image: "/flow-switch.png",

          //   shortDescription: "flow-switch",
          // },
        ],
      },
    ],
  },

  // Fieldman Sensors

  {
    organization: "Fieldman Sensors Private Limited",

    slug: "fieldman-sensors",

    description:
      "FSPL proudly stands as a Star Rated Export House, specializing  temperature Tips, Carbon cups & supply of top-quality spares for Induction Melting, Heating Furnaces, and Rolling Mills. ",
    // We excel in trading high-quality Handling Equipment.",

    groups: [
      // Measuring Equipment

      {
        title: "Measuring Equipment",

        slug: "measuring-equipment",

        products: [
          {
            name: "All type of Temperature Tips",

            slug: "temperature-tips",

            image: "/temperature-tips.png",

            shortDescription: "temperature-tips",
          },

          {
            name: "Lollypop Sampler",

            slug: "lollypop-sampler",

            image: "/lollypop-sampler.png",

            shortDescription: "lollypop-sampler",
          },
          {
            name: "Thermocouple - J, K S, R,T, B & PT100 types in various dimensions",

            slug: "thermocouple",

            image: "/thermocouple.png",

            shortDescription: "thermocouple",
          },
          {
            name: "Carbon cups",

            slug: "carbon-cups",

            image: "/carbon-cups.png",

            shortDescription: "carbon-cups",
          },
          {
            name: "Big Multi Dip (BMDs)",

            slug: "bmds",

            image: "/bmds.png",

            shortDescription: "bmds",
          },
        ],
      },

      // Accessories for TIPs

      {
        title: "Accessories for TIPs",

        slug: "accessories-for-tIPs",

        products: [
          {
            name: "meter-jumbo-display",

            slug: "meter-jumbo-display",

            image: "/meter-jumbo-display.png",

            shortDescription: "meter-jumbo-display",
          },

          {
            name: "Lance & Receptacles for connection of temperature tips",

            slug: "lance-receptacle",

            image: "/lance-receptacle.png",

            shortDescription: "lance-receptacle",
          },
          {
            name: "Neoprene Cable",

            slug: "neoprene-cable",

            image: "/neoprene-cable.png",

            shortDescription: "neoprene-cable",
          },
          {
            name: "Spectro Meter",

            slug: "spectro-meter",

            image: "/spectro-meter.png",

            shortDescription: "spectro-meter",
          },
        ],
      },

      // Refractories

      {
        title: "Refractories ",

        slug: "refractories ",

        products: [
          {
            name: "Casting Powder",

            slug: "casting-powder",

            image: "/casting-powder.png",

            shortDescription: "casting-powder",
          },

          {
            name: "nozzle-filling-compound",

            slug: "nozzle-filling-compound",

            image: "/nozzle-filling-compound.png",

            shortDescription: "nozzle-filling-compound",
          },
          {
            name: "Mortar",

            slug: "mortar",

            image: "/mortar.png",

            shortDescription: "mortar",
          },
          {
            name: "Redex",

            slug: "redex",

            image: "/redex.png",

            shortDescription: "redex",
          },
          {
            name: "tundish-nozzle",

            slug: "tundish-nozzle",

            image: "/tundish-nozzle.png",

            shortDescription: "tundish-nozzle",
          },
          // {
          //   name: "Porous Plug",

          //   slug: "porous-plug",

          //   image: "/porous-plug.png",

          //   shortDescription: "porous-plug",
          // },
          {
            name: "Porous plug well Block",

            slug: "porous-plug-well-block",

            image: "/porous-plug-well-block.png",

            shortDescription: "porous-plug-well-block",
          },
        ],
      },

      // Tundish Refractories

      {
        title: "Tundish Refractories",

        slug: "tundish-refractories",

        products: [
          {
            name: "Copper Mold",

            slug: "copper-mold",

            image: "/copper-mold.png",

            shortDescription: "copper-mold",
          },

          // {
          //   name: "CI Plug",

          //   slug: "ci-plug",

          //   image: "/ci-plug.png",

          //   shortDescription: "ci-plug",
          // },
          {
            name: "Tundish Board",

            slug: "tundish-board",

            image: "/tundish-board.png",

            shortDescription: "tundish-board",
          },
        ],
      },

      // Casting Machine Spares

      {
        title: "Casting Machine Spares",

        slug: "casting-machine-spares",

        products: [
          {
            name: "NSlide Gate System",

            slug: "nslide-gate-system",

            image: "/nslide-gate-system.png",

            shortDescription: "nslide-gate-system",
          },

          {
            name: "copper-mould-tube",

            slug: "copper-mould-tube",

            image: "/copper-mould-tube.png",

            shortDescription: "copper-mould-tube",
          },
          // {
          //   name: "Collector Nozzle",

          //   slug: "collector-nozzle",

          //   image: "/collector-nozzle.png",

          //   shortDescription: "collector-nozzle",
          // },
          {
            name: "Ferro Alloys",

            slug: "ferro-alloys",

            image: "/ferro-alloys.png",

            shortDescription: "ferro-alloys",
          },
          // {
          //   name: "CPC / GPC",

          //   slug: "cpc-gpc",

          //   image: "/cpc-gpc.png",

          //   shortDescription: "cpc-gpc",
          // },
          // {
          //   name: "Side Gate 1QC , 2QC",

          //   slug: "side-gate",

          //   image: "/side-gate.png",

          //   shortDescription: "side-gate",
          // },
          {
            name: "Tundish & Ladle",

            slug: "ladle ",

            image: "/tundish-ladel.png",

            shortDescription: "ladle ",
          },
          // {
          //   name: "Tundish",

          //   slug: "tundish  ",

          //   image: "/tundish.png",

          //   shortDescription: "tundish  ",
          // },
        ],
      },

      // Rolling Mill Machineries

      {
        title: "Rolling Mill Machineries",

        slug: "rolling-mill-machineries",

        products: [
          {
            name: "Hot Saw Cutting Machine",

            slug: "hot-saw-cutting-machine",

            image: "/hot-saw-cutting-machine.png",

            shortDescription: "hot-saw-cutting-machine",
          },

          {
            name: "Straightening Machine",

            slug: "straightening-machine",

            image: "/straightening-machine.png",

            shortDescription: "straightening-machine",
          },
          // {
          //   name: "Panel",

          //   slug: "panel",

          //   image: "/panel.png",

          //   shortDescription: "Panel",
          // },
          {
            name: "Housing less Mill Stand & Panel",

            slug: "housing-less-mill-stand",

            image: "/housing-less-mill-stand-panel.png",

            shortDescription: "housing-less-mill-stand",
          },
        ],
      },

      // Mill Rolls
      {
        title: "Mill Rolls",

        slug: "mill-rolls",

        products: [
          {
            name: "CHILLED, EN9, EN42 Rolls , Adamite  &  SGIP Rolls",

            slug: "adamite-sgip-rolls",

            image: "/mill-rolls.png",

            shortDescription: "adamite-sgip-rolls",
          },
        ],
      },

      // Rolling Mill Accessories

      {
        title: "Rolling Mill Accessories",

        slug: "rolling-mill-accessories",

        products: [
          {
            name: "Dummy Bar Bolt & Lancing Pipe",

            slug: "lancing-pipe",

            image: "/lancing-pipe-dummy-bar-bolt.png",

            shortDescription: "lancing-pipe",
          },
          {
            name: "Chain ,Gear Coupling , Motors  & Gears",

            slug: "motors-gears",

            image: "/motors-gear-coupling-chain.png",

            shortDescription: "motors-gears",
          },
        ],
      },

      // Lifting Equipment

      {
        title: "Lifting Equipment",

        slug: "lifting-equipment",

        products: [
          {
            name: "Lifting Magnets",

            slug: "lifting-magnets",

            image: "/lifting-equipment.png",

            shortDescription: "lifting-magnets",
          },

          // {
          //   name: "Hydraulic Scrap Pusher",

          //   slug: "hydraulic-scrap-pusher",

          //   image: "/hydraulic-scrap-pusher.png",

          //   shortDescription: "hydraulic-scrap-pusher",
          // },
          // {
          //   name: "Crane",

          //   slug: "crane",

          //   image: "/crane.png",

          //   shortDescription: "crane",
          // },
          // {
          //   name: "Scrap  (MS ,HMS , SS)",

          //   slug: "scrap",

          //   image: "/scrap.png",

          //   shortDescription: "scrap",
          // },
          // {
          //   name: "Billets",

          //   slug: "billets",

          //   image: "/billets.png",

          //   shortDescription: "billets",
          // },
        ],
      },
    ],
  },

  // Fieldman Control System

  {
    organization: "Fieldman Control System",

    slug: "fieldman-control-system",

    description:
      "Your Ultimate Destination for a diverse array of measuring instruments & factory automation products. ",
    // As a multi-brand super sourcing house , we take pride in being one-stop solution for cutting-edge technology & Innovation from top-notch brands across the globe.",

    groups: [
      // FLUKE Instruments

      {
        title: "FLUKE Instruments",

        slug: "fluke-instruments",

        products: [
          {
            name: "Digital Multimeter &  Clamp Meter",

            slug: "digital-multimeter-clamp-meter",

            image: "/digital-multimeter-clamp-meter.png",

            shortDescription: "digital-multimeter-clamp-meter",
          },

          {
            name: "Infrared Pyrometer & Thermal Imagers",

            slug: "infrared-pyrometer-thermal-imagers",

            image: "/infrared-pyrometer-thermal-imagers.png",

            shortDescription: "infrared-pyrometer-thermal-imagers",
          },
          {
            name: "Insulation & Earth Resistance Tester",

            slug: "insulation-earth-resistance-tester",

            image: "/insulation-earth-resistance-tester.png",

            shortDescription: "insulation-earth-resistance-tester",
          },
          {
            name: "Lux Meter, Sound Meter, Anemometer",

            slug: "lux-meter-sound-meter-anemometer",

            image: "/lux-meter-sound-meter-anemometer.png",

            shortDescription: "lux-meter-sound-meter-anemometer",
          },
          {
            name: "Contact & Non-contact Tachometer",

            slug: "contact-non-contact-tachometer",

            image: "/contact-non-contact-tachometer.png",

            shortDescription: "contact-non-contact-tachometer",
          },
          {
            name: "laser-distance-meter",

            slug: "laser-distance-meter",

            image: "/laser-distance-meter.png",

            shortDescription: "laser-distance-meter",
          },
        ],
      },
      // // KYORITSU Instruments
      //       {
      //         title: "KYORITSU Instruments",

      //         slug: "kyoritsu-instruments",

      //         products: [

      //           {
      //             name: "HVAC Digital Multimeter",

      //             slug: "hvac-digital-multimeter",

      //             image: "/hvac-digital-multimeter.png",

      //             shortDescription:
      //               "hvac-digital-multimeter",
      //           },

      //           {
      //             name: "Clamp Meter,  Voltage Tester ",

      //             slug: "clamp-meter-voltage-tester",

      //             image: "/clamp-meter-voltage-tester.png",

      //             shortDescription:
      //               "clamp-meter-voltage-tester",
      //           },
      //           {
      //             name: "Earth Resistance Tester",

      //             slug: "earth-resistance-tester",

      //             image: "/earth-resistance-tester.png",

      //             shortDescription:
      //               "earth-resistance-tester",
      //           },
      //           {
      //             name: "RCD/ELCB Tester",

      //             slug: "rcd-elcb-tester",

      //             image: "/rcd-elcb-tester.png",

      //             shortDescription:
      //               "rcd-elcb-tester",
      //           },
      //           {
      //             name: "Insulation Tester",

      //             slug: "insulation-tester",

      //             image: "/insulation-tester.png",

      //             shortDescription:
      //               "1KV to 12KV Insulation Tester",
      //           },
      //           {
      //             name: "Power Quality Meter & Analyzer ",

      //             slug: "power-quality-meter-analyzer ",

      //             image: "/power-quality-meter-analyzer.png",

      //             shortDescription:
      //               "Power Quality Meter & Analyzer ",
      //           },
      //         ],
      //       },

      //       // TESTO Instruments

      //       {
      //         title: "TESTO Instruments",

      //         slug: "testo-instruments",

      //         products: [

      //           {
      //             name: "Thermo  Hydrometer & Datalogger",

      //             slug: "thermo-hydrometer-datalogger",

      //             image: "/thermo-hydrometer-datalogger.png",

      //             shortDescription:
      //               "thermo-hydrometer-datalogger",
      //           },

      //           {
      //             name: "Material Moisture Meter",

      //             slug: "material-moisture-meter",

      //             image: "/material-moisture-meter.png",

      //             shortDescription:
      //               "material-moisture-meter",
      //           },
      //           {
      //             name: "Food Moisture meter",

      //             slug: "food-moisture-meter",

      //             image: "/food-moisture-meter.png",

      //             shortDescription:
      //               "Food Moisture meter",
      //           },
      //           {
      //             name: "Immersion & Surface Thermometer",

      //             slug: "immersion-surface-thermometer",

      //             image: "/immersion-surface-thermometer.png",

      //             shortDescription:
      //               "immersion-surface-thermometer",
      //           },
      //           {
      //             name: "Smart Probes for various Applications",

      //             slug: "smart-probes",

      //             image: "/smart-probes.png",

      //             shortDescription:
      //               "Smart Probes for various Applications",
      //           },
      //           {
      //             name: "Environment meters",

      //             slug: "environment-meters",

      //             image: "/environment-meters.png",

      //             shortDescription:
      //               "Environment meters",
      //           },
      //         ],
      //       },

      //       // Instruments for SOLAR

      //       {
      //         title: "Instruments for SOLAR",

      //         slug: "instruments-for-solar",

      //         products: [

      //           {
      //             name: "1500V Multimeter",

      //             slug: "1500v-multimeter",

      //             image: "/1500v-multimeter.png",

      //             shortDescription:
      //               "1500v-multimeter",
      //           },

      //           {
      //             name: "1000A/2000A, 1500V Clampmeter",

      //             slug: "1000a-clampmeter",

      //             image: "/1000a-clampmeter.png",

      //             shortDescription:
      //               "1000a-clampmeter",
      //           },
      //           {
      //             name: "Earth Resistance Tester",

      //             slug: "earth-resistance-tester",

      //             image: "/earth-resistance-tester.png",

      //             shortDescription:
      //               "earth-resistance-tester",
      //           },
      //           {
      //             name: "Insulation Tester",

      //             slug: "insulation-tester",

      //             image: "/insulation-tester.png",

      //             shortDescription:
      //               "insulation-tester",
      //           },
      //           {
      //             name: "Solar Irradiance Meter",

      //             slug: "solar-irradiance-meter",

      //             image: "/solar-irradiance-meter.png",

      //             shortDescription:
      //               "solar-irradiance-meter",
      //           },
      //           {
      //             name: "Infrared Pyrometers & Thermal Imagers",

      //             slug: "infrared-pyrometers-thermal-imagers",

      //             image: "/infrared-pyrometers-thermal-imagers.png",

      //             shortDescription:
      //               "infrared-pyrometers-thermal-imagers",
      //           },
      //         ],
      //       },

      //        // last page remaining because of no title

      //       {
      //         title: "Instruments for SOLAR",

      //         slug: "instruments-for-solar",

      //         products: [

      //           {
      //             name: "Proximity Sensor",

      //             slug: "proximity-sensor",

      //             image: "/proximity-sensor.png",

      //             shortDescription:
      //               "proximity-sensor",
      //           },

      //           {
      //             name: "Photoelectric Sensor",

      //             slug: "photoelectric-sensor",

      //             image: "/photoelectric-sensor.png",

      //             shortDescription:
      //               "photoelectric-sensor",
      //           },
      //           {
      //             name: "Earth Resistance Tester",

      //             slug: "earth-resistance-tester",

      //             image: "/earth-resistance-tester.png",

      //             shortDescription:
      //               "earth-resistance-tester",
      //           },
      //           {
      //             name: "Insulation Tester",

      //             slug: "insulation-tester",

      //             image: "/insulation-tester.png",

      //             shortDescription:
      //               "insulation-tester",
      //           },
      //           {
      //             name: "Solar Irradiance Meter",

      //             slug: "solar-irradiance-meter",

      //             image: "/solar-irradiance-meter.png",

      //             shortDescription:
      //               "solar-irradiance-meter",
      //           },
      //           {
      //             name: "Infrared Pyrometers & Thermal Imagers",

      //             slug: "infrared-pyrometers-thermal-imagers",

      //             image: "/infrared-pyrometers-thermal-imagers.png",

      //             shortDescription:
      //               "infrared-pyrometers-thermal-imagers",
      //           },
      //         ],
      //       },
    ],
  },
];
