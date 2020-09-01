# Voronoi workshop

Velkommen til Voronoi workshop! Her skal du gå gjennom en av de enkleste måtene å generere et enkelt Voronoi mønster!

Et Voronoi mønster kan forklares slik:

- Gitt et sett T med tilfeldig spredde punkter på et 2d plan
- Alle punkter i planet får en tilhørighet til sitt nærmeste punkt fra settet T.
- Vi kan visualisere dette ved å sette en farge på et piksel basert på hvilke punkt pikselet hører til.

Du kan skrive all koden din i `voronoi.js`

### Lykke Til! :rocket:

`index.html`inneholder boilerplate for å sette opp et canvas som vi kan bruke til å tegne på. Voronoi funksjonen din må generere et 2d-array på 1024x1024 elementer/piksler or returnere dette.

Dette arrayet sendes inn i `getImageDataFromVornoi()` og du får da ut et array med rå pikseldata som vi kan sett inn i et `ImageData` element som igjen brukes av `<canvas>`. Du trenger ikke gjøre noe i `index.html`, med mindre du vil begynne å leke med fargene i voronoi diagrammet.

#### 1. Generere et sett med 50 punkter:

```javascript
// javascript har

Math.random();

// som gir et tall mellom 0 og 1
```

<details>
<summary>Utvid for kodeforslag - :warning: Prøv selv først! :warning:</summary>

```javascript
const points = [];

// generate 50 random points with an index
for (let i = 0; i < 50; i++) {
  let x = Math.random() * 1024;
  let y = Math.random() * 1024;
  points.push({ x, y, i });
}
```

</details>

#### 2. Distanse mellom to punkter:

Lag en funksjon for å finne lengden av vektoren mellom to punkter p1 og p2:  
Formel: `Sqrt(Dot(p1-p2))`

Dotprodukt: x<sup>2</sup>+y<sup>2</sup>

```javascript
//javascript sqrt funskjon:
Math.sqrt(9);
//output: 3
```

<details>
<summary>Utvid for kodeforslag - :warning: Prøv selv først! :warning:</summary>

```javascript
const distanceToPoint = (x1, y1, x2, y2) => {
  let vx = x1 - x2;
  let vy = y1 - y2;

  return Math.sqrt(vx * vx + vy * vy);
};
```

</details>

#### 3. Generer opp et 1024x1024 2d-array:

Sett initial verdi til 1 i alle celler.
_Utfordring:_ klarer du det uten å bruke for-loop? :clown_face:

<details>
<summary>Utvid for kodeforslag - :warning: Prøv selv først! :warning:</summary>

```javascript
const voronoi = Array(1024)
  .fill(null)
  .map(() => Array(1024).fill(1));
```

</details>

#### 4. Finne hvilket punkt et piksel hører til:

For hvert piksel må vi finne ut hvilke punkt pikselet hører til. Vi setter da en farge på pikselet basert på index verdien på punktet som pikselet hører til.

<details>
<summary>Utvid for kodeforslag - :warning: Prøv selv først! :warning:</summary>

```javascript
for (let x = 0; x < 1024; x++)
  for (let y = 0; y < 1024; y++) {
    closestPoint = points
      .map((p) => {
        p.d = distanceToPoint(p.x, p.y, x, y);
        return p;
      })
      .sort((p1, p2) => p1.d - p2.d)[0];

    voronoi[x][y] = closestPoint.i / 50;
  }
```

</details>

Klarer du å gjøre _dette_ uten å bruke for loops? :smiling_imp:
