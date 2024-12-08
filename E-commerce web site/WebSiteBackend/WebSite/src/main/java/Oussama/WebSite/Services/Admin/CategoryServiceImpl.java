package Oussama.WebSite.Services.Admin;

import Oussama.WebSite.Entity.Category;
import Oussama.WebSite.Repository.CategoryRepository;
import Oussama.WebSite.dto.CategoryDto;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;


    @Transactional
    public Category createCategory(CategoryDto categoryDto) {
        try {
            Category category = new Category();
            category.setName(categoryDto.getName());
            category.setDescription(categoryDto.getDescription());
            return categoryRepository.save(category);
        } catch (DataIntegrityViolationException e) {
            // Gérer les violations d'intégrité des données (par exemple, doublons)
            throw new RuntimeException("Erreur lors de la création de la catégorie en raison d'une violation d'intégrité des données.", e);
        } catch (Exception e) {
            // Gérer d'autres exceptions
            throw new RuntimeException("Une erreur inattendue s'est produite lors de la création de la catégorie.", e);
        }
    }

    @Override
    @Transactional
    public void deleteCategory(Long categoryId) {
        try {
            categoryRepository.deleteById(categoryId);
        } catch (EmptyResultDataAccessException e) {
            throw new RuntimeException("La catégorie avec l'ID " + categoryId + " n'a pas été trouvée.", e);
        } catch (Exception e) {
            throw new RuntimeException("Une erreur inattendue s'est produite lors de la suppression de la catégorie.", e);
        }
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }


}

