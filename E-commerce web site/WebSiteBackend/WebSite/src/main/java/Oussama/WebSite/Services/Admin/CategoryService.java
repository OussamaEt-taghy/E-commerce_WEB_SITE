package Oussama.WebSite.Services.Admin;

import Oussama.WebSite.Entity.Category;
import Oussama.WebSite.dto.CategoryDto;

import java.util.List;

public interface CategoryService {
   Object createCategory(CategoryDto categoryDto);
   void deleteCategory(Long categoryId);
   List<Category> getAllCategories();
}
