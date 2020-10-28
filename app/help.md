# Command
## add book   
command: `add "{book name}"`
alias:   `-a`
Example: 
- `books add "Data Structure in JAVA"`

## Fuzzy List/Search book
command: `list {keywords}`
alias: `-l`
Example:
- `books list`  // given 10 results group by status and date.
- `books list java`

## Update book
command: `update {book id}`
alias: `-u`
Example:
- `books update 2`  

## Remove book
command: `delete {book id}`
alias: `-d`
Example:
- `books delete 1`  