# Eken Consulting Portfolio

En professionell portfoliosida byggd med Next.js för att visa upp mina projekt och tjänster.

## Funktioner

- Responsiv design som fungerar på alla enheter
- Animerade UI-element med Framer Motion
- Ljust/mörkt tema med next-themes
- Optimerad för sökmotorer (SEO)
- Interaktiva projektvisningar
- Kontaktformulär
- Tillgänglighetsoptimerad

## Teknik

Projektet använder följande teknologier:

- **Next.js**: React-ramverk med server-side rendering och statisk sidgenerering
- **TypeScript**: För typsäker kodning
- **Tailwind CSS**: För stilsättning
- **Framer Motion**: För animationer
- **Radix UI**: För tillgängliga UI-komponenter
- **next-themes**: För hantering av ljust/mörkt tema

## Installation

1. Klona projektet:
   ```bash
   git clone https://github.com/ditt-användarnamn/portfolio-page.git
   cd portfolio-page
   ```

2. Installera beroenden:
   ```bash
   npm install
   ```

3. Starta utvecklingsservern:
   ```bash
   npm run dev
   ```

4. Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Bygga för produktion

För att bygga projektet för produktion:

```bash
npm run build
```

För att köra produktionsbygget lokalt:

```bash
npm start
```

## Deployment

Projektet är konfigurerat för enkel deployment till Netlify:

1. Pusha dina ändringar till GitHub
2. Koppla repositoryt till Netlify
3. Netlify kommer automatiskt att bygga och deploya projektet

## Projektstruktur

```
portfolio-page/
├── public/             # Statiska filer
├── src/                # Källkod
│   ├── components/     # React-komponenter
│   ├── pages/          # Next.js sidor
│   ├── styles/         # CSS och stilmallar
│   └── utils/          # Hjälpfunktioner
├── .gitignore          # Git ignore-fil
├── next.config.js      # Next.js konfiguration
├── package.json        # Projektberoenden och skript
├── tailwind.config.js  # Tailwind CSS konfiguration
└── tsconfig.json       # TypeScript konfiguration
```

## Licensiering

Detta projekt är licensierat under MIT-licensen.
