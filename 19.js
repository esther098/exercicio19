let cliques = 0;

    document.getElementById("btnContador").addEventListener("click", function() {
      cliques++;
      document.getElementById("contador").textContent = cliques;
    });