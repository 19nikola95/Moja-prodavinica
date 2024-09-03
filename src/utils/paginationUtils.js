export function createPaginationPages(numberOfPages) {
  const array = Array(numberOfPages).fill(0);
  return array.map((page, index) => index + 1); 
}

export function createPagination(items, currentPage, {perPage = 10} = {}) {
  const pagesNumber = Math.floor(items.length / perPage);

  const startIndex = perPage * (currentPage - 1);
  const stopIndex = perPage * currentPage;

  const paginatedItems = items.slice(startIndex, stopIndex);

  return {
    items: paginatedItems,
    total: items.length,
    pages: createPaginationPages(pagesNumber),
  }

}