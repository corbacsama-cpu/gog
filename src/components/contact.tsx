export default function Contact() {
  return (
    <div
      class="relative flex flex-row h-[855px] items-center justify-center w-full gap-4 bg-cover bg-center bg-no-repeat"
      style={{ "background-image": `url('./images/team2.jpeg')` }}
    >
      {/* Overlay */}
      <div class="absolute inset-0 bg-black/80 z-0"></div>


      {/* Zone gauche */}
      <div class="relative z-10 h-[500px] flex flex-col justify-between p-6 text-white">
        {/* Zone haut */}
        <div class="text-start">
          <h1 class="text-3xl font-bold mb-2">CONTACTEZ-NOUS</h1>
          <p class="text-lg">MAINTENANT</p>
        </div>

        {/* Zone bas */}
        <div class="space-y-4">
          {/* Email */}
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12H8m8 0l-8 8m8-8l-8-8"
              />
            </svg>
            <p>contact@galaxy-oilandgas.com</p>
          </div>

          {/* Téléphone */}
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12H8m8 0l-8 8m8-8l-8-8"
              />
            </svg>
            <p>+242 05 578 58 58</p>
          </div>

          {/* Adresse */}
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12H8m8 0l-8 8m8-8l-8-8"
              />
            </svg>
            <div>
              <p>ROND-POINT EX BATA, CENTRE-VILLE RC</p>
              <p>POINTE-NOIRE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Zone droite */}
      <div class="relative z-10 bg-green-500 h-[500px] pr-8 flex-1"></div>
    </div>
  );
}
