export const menuItems = [
  {
    title: "News",
    icon: "newspaper",
    menuItemNumber: 1
  },
  {
    title: "Music",
    icon: "music",
    menuItemNumber: 2
  },
  {
    title: "Movies",
    icon: "record",
    menuItemNumber: 3
  },
  {
    title: "Reading",
    icon: "book",
    menuItemNumber: 4
  },
  {
    title: "Travel",
    icon: "road",
    menuItemNumber: 5
  },
  {
    title: "Economy",
    icon: "chart line",
    menuItemNumber: 6
  },
  {
    title: "Relax Time",
    icon: "coffee",
    menuItemNumber: 7
  }
];
export const segmentTexts = [
  {
    id: 1,
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  },
  {
    id: 2,
    text:
      "Il dolce far niente è espressione ambigua per indicare l’inattività di una persona poiché ogni individuo valuta in modo soggettivo lo ‘stare in ozio’: un impiegato che torna a casa dal lavoro perde il proprio tempo guardando i programmi televisivi, il critico televisivo invece lavora su quei programmi ed elabora riflessioni sistematiche; un pensionato per oziare si dedica a lunghe passeggiate nel bosco, ma il bosco per il botanico rappresenta il luogo di studio e di ricerca; un paziente in una sala d’attesa perde tempo leggendo riviste mediche, ma il ricercatore su quelle riviste pubblica articoli di importanti scoperte scientifiche. \n" +
      "Ogni persona ha proprie idee, opinioni, modi su come svagarsi e adotta a seconda dei contesti o degli ambienti in cui si trova soluzioni variabili per soddisfare al meglio questa sua voglia o necessità. "
  },
  {
    id: 3,
    text:
      "Leibniz is known among philosophers for his wide range of thought about fundamental philosophical ideas and principles, including truth, necessary and contingent truths, possible worlds, the principle of sufficient reason (i.e., that nothing occurs without a reason), the principle of pre-established harmony (i.e., that God constructed the universe in such a way that corresponding mental and physical events occur simultaneously), and the principle of noncontradiction (i.e., that any proposition from which a contradiction can be derived is false). Leibniz had a lifelong interest in and pursuit of the idea that the principles of reasoning could be reduced to a formal symbolic system, an algebra or calculus of thought, in which controversy would be settled by calculations."
  },
  {
    id: 4,
    text:
      "Ekrnizacija bitke koja se vodila između Sjedinjenih Američkih Država i Japana tokom februara i marta 1945. godine u završnim operacijama na Pacifičkom frontu u Drugom svetskom ratu. Kao rezultat bitke, SAD je stekao kontrolu nad ostrvom Ivo Džima i aerodromima koji su se tamo nalazili. Bitka je čuvena po podizanju američke zastave koje su izveli američki marinci na najvišem planinskom vrhu ostrva"
  },
  {
    id: 5,
    text:
      "Qu'est ce qu'un « droit de veto » ? À quoi sert un « négociateur » ? « L'apartheid », en Afrique du Sud, c'était quoi ? Pourquoi parle-t-on de « l'élargissement » de l'Union européenne ? Ces mots, vous les entendez souvent dans les journaux. Pour comprendre les mots et les concepts, un vrai journal d’information raconte chaque événement avec son contexte, son histoire et ses personnages. Retrouvez le Journal en français facile avec sa transcription du lundi au vendredi à partir de 8h00 TU."
  },
  {
    id: 6,
    text:
      "To start with, let's give you a simplistic, high-level view of what Object-oriented programming (OOP) is. We say simplistic, because OOP can quickly get very complicated, and giving it a full treatment now would probably confuse more than help. The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.\n" +
      "\n" +
      "Objects can contain related data and code, which represent information about the thing you are trying to model, and functionality or behavior that you want it to have. Object data (and often, functions too) can be stored neatly (the official word is encapsulated) inside an object package (which can be given a specific name to refer to, which is sometimes called a namespace), making it easy to structure and access; objects are also commonly used as data stores that can be easily sent across the network. Let's consider a simple program that displays information about the students and teachers at a school. Here we'll look at OOP theory in general, not in the context of any specific programming language.\n" +
      "\n" +
      "To start this off, we could return to our Person object type from our first objects article, which defines the generic data and functionality of a person. There are lots of things you could know about a person (their address, height, shoe size, DNA profile, passport number, significant personality traits ...) , but in this case we are only interested in showing their name, age, gender, and interests, and we also want to be able to write a short introduction about them based on this data, and get them to say hello. This is known as abstraction — creating a simple model of a more complex thing, which represents its most important aspects in a way that is easy to work with for our program's purposes. This is really useful — teachers and students share many common features such as name, gender, and age, so it is convenient to only have to define those features once. You can also define the same feature separately in different classes, as each definition of that feature will be in a different namespace. For example, a student's greeting might be of the form \"Yo, I'm [firstName]\" (e.g Yo, I'm Sam), whereas a teacher might use something more formal, such as \"Hello, my name is [Prefix] [lastName], and I teach [Subject].\" (e.g Hello, My name is Mr Griffiths, and I teach Chemistry). In this case we don't want generic people — we want teachers and students, which are both more specific types of people. In OOP, we can create new classes based on other classes — these new child classes can be made to inherit the data and code features of their parent class, so you can reuse functionality common to all the object types rather than having to duplicate it.  Where functionality differs between classes, you can define specialized features directly on them as needed.JavaScript uses special functions called constructor functions to define objects and their features. They are useful because you'll often come across situations in which you don't know how many objects you will be creating; constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.\n" +
      "\n" +
      "When a new object instance is created from a constructor function, its core functionality (as defined by its prototype, which we'll explore in the article Object prototypes) is linked to via a reference chain called a prototype chain.\n" +
      "\n" +
      "Let's explore creating classes via constructors and creating object instances from them in JavaScript. First of all, we'd like you to make a new local copy of the oojs.html file we saw in our first Objects article."
  },
  {
    id: 7,
    text:
      "Los archivos de código objeto pueden ser muy útiles en muchas situaciones y que nos pueden facilitar el trabajo diario, sin embargo consigo traen problemas que pueden generar errores muy difíciles de corregir, por ejemplo cuando un objeto importa funciones de otro archivo de código objeto que ha sido modificado, el intento de la librería o el programa que importó tal librería de ejecutar el código con parámetros incorrectos o inexistentes puede generar un error que generalmente el compilador no detecta, ya que el código objeto no es verificado, únicamente enlazado. Este tipo de error se puede solucionar reescribiendo el código de manera correcta y re compilarlo a código objeto."
  }
];
