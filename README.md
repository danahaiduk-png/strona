# Dokumentacja projektu „Salon Urody”
## H2 Wykonawca:Bohdana Haiduk
### 1. Cel projektu

Celem projektu jest stworzenie estetycznej strony internetowej dla salonu urody z funkcjami rezerwacji usług oraz zarządzania klientami. Projekt jest w fazie rozwoju i obecnie zawiera tylko podstawową strukturę frontendu i wstępne szkice funkcjonalności backendu.

### 2. Zakres funkcjonalności (planowane)

* Strona główna z informacjami o salonie
* Strona usług z podstawową listą usług (Manicure, Rzęsy, Kosmetologia)
* Formularz rezerwacji klientów (funkcjonalność częściowo zaimplementowana)
* Strona klientów z tabelą danych (w trakcie wdrażania dynamicznego ładowania)
* Baza danych SQLite planowana do integracji


### 3. Technologie (planowane)
* Frontend: HTML5, CSS3, JavaScript 
* Backend: Node.js + Express (wstępne ustawienia)
* Baza danych: SQLite (projektowana)
* IDE: Visual Studio Code

### 4. Struktura projektu (wstępna)
beauty-salon/

  ├── server.js (szkic backendu)
  
  ├── package.json
  
  ├── public/
  
  │   ├── style.css (podstawowy styl)
  
  │   ├── script.js (częściowa logika)
  
  ├── views/
  
  │   ├── index.html
  
  │   ├── services.html
  
  │   ├── booking.html (formularz w fazie testów)
  
  │   ├── clients.html (szkic tabeli klientów)

### 5. Postęp prac

1. Stworzono strukturę projektu i podstawowy frontend
2. Zaplanowano logikę backendu i bazę danych
3. Wstępnie przygotowano formularz rezerwacji
4. Tabela klientów i funkcje CRUD są w fazie implementacji

### 6. Planowane ulepszenia
- Integracja formularza z bazą danych SQLite
- Dodanie funkcji edycji i usuwania klientów
- Walidacja formularza po stronie serwera
- Responsywność strony na urządzenia mobilne
- Poprawa designu i dodanie efektów hover
