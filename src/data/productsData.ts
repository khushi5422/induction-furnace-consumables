export type Product = {
  name: string;
  slug: string;
  image: string;
  shortDescription: string | string[];
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

            shortDescription: [
              "Industrial furnace assembly systems designed for steel melting operations.",
            ],
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
        ],
      },

      // Furnace Insulation Spare
      {
        title: "Furnace Insulation Spare",

        slug: "furnace-insulation-spare",

        products: [
          {
            name: "Induction Furnace Coil Insulation",

            slug: "furnace-insulation-spare",

            image: "/induction-furnace-coil-insulation.png",

            shortDescription: [
              "Permali & FRP Coil Support",
              "Flexocoat & Biosphinol",
              "FRP / Silicon / Woven Tape",
            ],
          },

          {
            name: "Hardware FRP Material Syndanio ",

            slug: "frp-mica-syndaniosheets",

            image: "/hardware-frp-material-syndanio.png",

            shortDescription: [
              "FRP / Mica / Syndanio Sheets",
              "Permali TEE , Eye Bolt , Set Collar",
              "FRP / Mica Tube & Washer",
              "Teflon & Non Asbestos Sheet",
              "FRP & Syndanio Spacers",
              "SS & Brass Hardware",
            ],
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
          {
            name: "Hydraulic Flexible Hoses  & Seal kits ",

            slug: "hydraulic-flexible-hoses",

            image: "/hydraulic-flexible-hoses-seal-kits.png",

            shortDescription: "hydraulic-flexible-hoses",
          },
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

            shortDescription: [
              "thyristor-diode-fuse",
              "Thyristor , Diode & Fuse",
              "SCR & Diode Clamp Assembly",
              "Chill Blocks",
              "Temperature  Sensors",
              "Temperature Gauges",
              "Pressure Switch & Gauge",
              "Flow Switch",
            ],
          },
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
        title: "Accessories for Tips",

        slug: "accessories-for-tips",

        products: [
          {
            name: "Meter Jumbo Display",

            slug: "meter-jumbo-display",

            image: "/meter-jumbo-display.png",

            shortDescription: "meter-jumbo-display",
          },

          {
            name: "Lance & Receptacles for connection of temperature tips",

            slug: "lance-receptacle",

            image: "/lance-receptacle.png",

            shortDescription: ["Lance", " Receptacle"],
          },
          {
            name: "Neoprene Cable",

            slug: "neoprene-cable",

            image: "/neoprene-cable.png",

            shortDescription: "Neoprene Cable",
          },
          {
            name: "Spectro Meter",

            slug: "spectro-meter",

            image: "/spectro-meter.png",

            shortDescription: "Spectro Meter",
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

            shortDescription: "Casting Powder",
          },

          {
            name: "Nozzle Filling Compound",

            slug: "nozzle-filling-compound",

            image: "/nozzle-filling-compound.png",

            shortDescription: "Nozzle Filling Compound",
          },
          {
            name: "Mortar",

            slug: "mortar",

            image: "/mortar.png",

            shortDescription: "Mortar",
          },
          {
            name: "Redex",

            slug: "redex",

            image: "/redex.png",

            shortDescription: "Redex",
          },
          {
            name: "tundish-nozzle",

            slug: "tundish-nozzle",

            image: "/tundish-nozzle.png",

            shortDescription: "tundish-nozzle",
          },
          {
            name: "Porous plug well Block",

            slug: "porous-plug-well-block",

            image: "/porous-plug-well-block.png",

            shortDescription: "Porous plug well Block",
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

            shortDescription: "Copper Mold",
          },

          {
            name: "Tundish Board",

            slug: "tundish-board",

            image: "/tundish-board-garseal.png",

            shortDescription: "Tundish Board",
          },
        ],
      },

      // Casting Machine Spares

      {
        title: "Casting Machine Spares",

        slug: "casting-machine-spares",

        products: [
          {
            name: "Ferro Alloys",

            slug: "ferro-alloys",

            image: "/ferro-alloys.png",

            shortDescription: "Ferro Alloys",
          },
          {
            name: "Tundish & Ladle",

            slug: "ladle ",

            image: "/tundish-ladel.png",

            shortDescription: "Ladle ",
          },
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

            shortDescription: "Hot Saw Cutting Machine",
          },

          {
            name: "Straightening Machine",

            slug: "straightening-machine",

            image: "/straightening-machine.png",

            shortDescription: "Straightening Machine",
          },
          {
            name: "Housing less Mill Stand & Panel",

            slug: "housing-less-mill-stand",

            image: "/housing-less-mill-stand-panel.png",

            shortDescription: [
              "Panel",
              "Housing less Mill Stand",
              "Convertible Mill Stand",
              "Universal Mill Stand",
            ],
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

            shortDescription: [
              "CHILLED",
              "EN9",
              "EN42",
              "Rolls ",
              "Adamite",
              "SGIP Rolls",
            ],
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

            shortDescription: ["Dummy Bar Bolt ", "Lancing Pipe"],
          },
          {
            name: "Chain ,Gear Coupling , Motors  & Gears",

            slug: "motors-gears",

            image: "/motors-gear-coupling -chain.png",

            shortDescription: ["Chain", "Gear Coupling", "Motors ", " Gears"],
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

            shortDescription: [
              "Lifting Magnets",
              "Hydraulic Scrap Pusher",
              "Crane",
              "Scrap  (MS ,HMS , SS)",
              "Billets",
            ],
          },
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
            name: "FLUKE Instruments",

            slug: "fluke-instruments",

            image: "/fieldman-control-system.png",

            shortDescription: [
              "Digital Multimeter &  Clamp Meter",
              "Infrared Pyrometer & Thermal Imagers",
              "Insulation & Earth Resistance Tester",
              "Lux Meter, Sound Meter, Anemometer",
              "Contact & Non-contact Tachometer",
              "Laser Distance Meter",
            ],
          },
        ],
      },
      // // KYORITSU Instruments
      {
        title: "KYORITSU Instruments",

        slug: "kyoritsu-instruments",

        products: [
          {
            name: "KYORITSU Instruments",

            slug: "kyoritsu-instruments",

            image: "/kyoritsu.png",

            shortDescription: [
              "Clamp meter,  Voltage Tester ",
              "Earth Resistance Tester",
              "RCD/ELCB Tester",
              "1KV to 12KV Insulation Tester ",
              "Power Quality Meter & Analyzer ",
            ],
          },
        ],
      },

      // TESTO Instruments

      {
        title: "TESTO Instruments",

        slug: "testo-instruments",

        products: [
          {
            name: "   Testo Pocket sized measuring instruments",

            slug: "testo-instruments",

            image: "/testo.png",

            shortDescription: [
              "Thermo  Hydrometer & Datalogger",
              "Material Moisture meter",
              "Food Moisture meter",
              "Immersion & surface thermometer",
              "Smart Probes for various Applications",
              "Environment meters",
            ],
          },
        ],
      },

      // Instruments for SOLAR

      {
        title: "Instruments for SOLAR",

        slug: "instruments-for-solar",

        products: [
          {
            name: "Measuring Instruments for Solar Industry",

            slug: "instruments-for-solar",

            image: "/instruments-for-solar.png",

            shortDescription: [
              "1500V Multimeter",
              "1000A/2000A, 1500V Clampmeter",
              "Earth Resistance Tester",
              "Insulation Tester",
              "Earth Resistance Tester",
              "Solar Irradiance Meter",
              "Infrared Pyrometers",
              "Thermal Imagers",
            ],
          },
        ],
      },
      // Sensors
      {
        title: "Sensors",

        slug: "sensors",

        products: [
          {
            name: "Sensors",

            slug: "sensors",

            image: "/sensors.png",

            shortDescription: [
              "Proximity Sensor",
              "Photoelectric Sensor",
              "Earth Resistance Tester",
              "Insulation Tester",
              "Solar Irradiance Meter",
              "Infrared Pyrometers & Thermal Imagers",
            ],
          },
        ],
      },

      // Timer & Controller

      {
        title: "Timer & Controller",

        slug: "timer-controller",

        products: [
          {
            name: "Timer & Controller",

            slug: "timer-controller",

            image: "/timer-controller.png",

            shortDescription: [
              "Analogue & Digital Timers",
              "Multifunction & Preset Counters",
              "PID & Temperature Controllers",
              "Multifunction Panel meters",
              "Paperless Data Recorders",
              "Various Converters",
              "Thyristor Units & DPUs",
            ],
          },
        ],
      },

      // PLC & HMI
      {
        title: "PLC & HMI",

        slug: "plc-hmi",

        products: [
          {
            name: "PLC & HMI",

            slug: "plc-hmi",

            image: "/plc-hmi.png",

            shortDescription: [
              "Programable Logic Controller(PLC)",
              "Human Machine Interface(HIMIs)",
              "Variable Frequency Drivers (VFDs)",
              "Servo Motor & Drives",
            ],
          },
        ],
      },

      // SMPS
      {
        title: "Power Supply",

        slug: "power-supply",

        products: [
          {
            name: "Power Supply",

            slug: "power-supply",

            image: "/smps.png",

            shortDescription: [
              "Power Supply(SMPs)",
              "General Purpose & PCB Relays",
              "Phase Sequence Relays",
              "Solid State Relays(SSR)",
              "Limit Switches , Micro Switches",
              "Tower Lights , Signal Lights",
            ],
          },
        ],
      },
    ],
  },
];
