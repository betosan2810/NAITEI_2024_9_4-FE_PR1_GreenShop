function renderPagination(totalPages, currentPage) {
    const paginationContainer = document.getElementById('pagination'); // Phần tử chứa pagination
    let paginationHTML = '';

    // Nút "Trang trước"
    if (currentPage > 1) {
        paginationHTML += `<a href="?page=${currentPage - 1}" class="px-4 py-2 bg-gray-200 hover:bg-gray-300">Trang trước</a>`;
    } else {
        paginationHTML += `<span class="px-4 py-2 bg-gray-300 cursor-not-allowed">Trang trước</span>`;
    }

    // Các nút trang
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<span class="px-4 py-2 bg-green-500 text-white">${i}</span>`;
        } else {
            paginationHTML += `<a href="?page=${i}" class="px-4 py-2 bg-gray-200 hover:bg-gray-300">${i}</a>`;
        }
    }

    // Nút "Trang sau"
    if (currentPage < totalPages) {
        paginationHTML += `<a href="?page=${currentPage + 1}" class="px-4 py-2 bg-gray-200 hover:bg-gray-300">Trang sau</a>`;
    } else {
        paginationHTML += `<span class="px-4 py-2 bg-gray-300 cursor-not-allowed">Trang sau</span>`;
    }

    paginationContainer.innerHTML = paginationHTML; // Thêm HTML vào container
}

export { renderPagination };
