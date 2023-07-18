import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"

const invoices = 
[
  {
    no: 1,
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    genre: "Novel, Historical fiction",
    publicationDate: "17 June, 1958"
    
  },
  {
    no: 2,
    title: "Fairy tales",
    author: "Hans Christian Andersen",
    genre: "magical story",
    publicationDate: "December 20th, 1812.",
    img : "https://i.ibb.co/YjVG2nd/2.jpg"
  },
  {
    no: 3,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    genre: "Epic poetry",
    publicationDate: "11 April 1472",
    img : "https://i.ibb.co/sgQ1Cts/3.jpg"
  },
  {
    no: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Novel, Romance, Fiction",
    publicationDate: "January 28, 1813",
    img: "https://i.ibb.co/mcZ2RGR/4.jpg"
  },
  {
    no: 5,
    title: "Le Pre Goriot",
    author: "Honor de Balzac",
    genre: "Fiction: an invented story",
    publicationDate: "1 December, 1835",
    img: "https://i.ibb.co/Q6c6CdW/5.jpg"
  },
  {
    no: 6,
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    author: "Samuel Beckett",
    genre: "Fiction",
    publicationDate: "January 12, 1994",
    img: "https://i.ibb.co/Wvmt5zw/6.jpg"
  },
  {
    no: 7,
    title: "The Decameron",
    author: "Giovanni Boccaccio",
    genre: "Novel, Fiction, Frame story, Satire, Romance novel",
    publicationDate: "April 1351",
    img: "https://i.ibb.co/THXk2N7/7.jpg"
  },
  {
    no: 8,
    title: "Ficciones",
    author: "Jorge Luis Borges",
    genre: "Fiction, Satire",
    publicationDate: "February 1, 1994",
    img : "https://i.ibb.co/gWtHSWb/8.jpg"
  },
  {
    no: 9,
    title: "Wuthering Heights",
    author: "Emily Bront",
    genre: "Gothic fiction, Romance novel, Tragedy, Domestic Fiction",
    publicationDate: "4 December 1847",
    img : "https://i.ibb.co/NpgSYZj/9.jpg"
  },
  {
    no: 10,
    title: "The Stranger",
    author: "Albert Camus",
    genre: "Absurdist fiction, Adventure fiction",
    publicationDate: "May 19, 1942",
    img : "https://i.ibb.co/hdBVvLC/10.jpg"
  }
]

export function HomeCart() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Author</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead className="text-right">Publication Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.author}>
            <TableCell >{invoice.title}</TableCell>
            <TableCell>{invoice.genre}</TableCell>
            <TableCell >{invoice.publicationDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    
  )
}
