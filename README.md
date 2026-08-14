# Vlada Nails

Site-ul studioului de unghii Vlada Nails — Next.js 16, Tailwind CSS 4, Framer Motion.

## Pornire locală

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Conectarea programărilor la Gmail

Când o clientă trimite o cerere din calendarul de programare, site-ul poate trimite automat un
email frumos formatat către adresa de Gmail a studioului (`email` din `data/business.ts`), pe
lângă mesajul de WhatsApp care se deschide oricum. Fără cele două chei de mai jos, emailul pur și
simplu nu se trimite — WhatsApp continuă să funcționeze normal, deci site-ul e funcțional și fără
acest pas.

### 1. Generează o parolă de aplicație Gmail

Emailul se trimite din contul Gmail al studioului folosind o **parolă de aplicație** (nu parola
obișnuită de logare — Google nu o mai acceptă pentru aplicații externe).

1. Mergi pe [myaccount.google.com/security](https://myaccount.google.com/security) și
   activează **Verificarea în 2 pași** dacă nu e deja activă (obligatoriu pentru pasul următor).
2. Mergi pe [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
3. Creează o parolă nouă (orice nume, ex. „Vlada Nails Site”). Google îți dă un cod de
   16 caractere, de tipul `abcd efgh ijkl mnop`.
4. Copiază acel cod — e afișat o singură dată.

### 2. Adaugă cheile în proiect

Local (pentru testare pe calculator), copiază `.env.example` în `.env.local`:

```bash
cp .env.example .env.local
```

și completează:

```
GMAIL_USER=adresa.ta@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

`.env.local` nu se urcă niciodată pe GitHub (e ignorat automat) — cheile rămân private.

### 3. Adaugă cheile și pe site-ul live

Pe calculatorul tău, `.env.local` funcționează doar pentru `npm run dev`. Pentru ca emailurile să
meargă și pe site-ul public, aceleași două variabile (`GMAIL_USER`, `GMAIL_APP_PASSWORD`) trebuie
adăugate și în platforma unde e găzduit site-ul (ex. Vercel → Project → Settings →
Environment Variables), apoi trebuie redeploy-uit site-ul.

## Editare conținut

Aproape tot conținutul (prețuri, servicii, program, contact, galerie, recenzii) e în fișiere
separate din `data/`, editabile fără să atingi codul componentelor.
