# Chapter Officers Plugin

WordPress plugin for managing a list of chapter officers.

## Example Frontend Code

```
<?php $chapter_officers = get_option('chapter_officers'); ?>
<?php if (isset($chapter_officers['items']) && is_array($chapter_officers['items']) && count($chapter_officers['items'])): ?>
<div class="container home-officers mt-5 text-center">
  <div class="row">
    <div class="offset-md-1 col-md-10">
      <h3 class="mb-3"><?php echo __($chapter_officers['heading']); ?></h3>
      <div class="row">
        <?php foreach ($chapter_officers['items'] as $officer): ?>
        <div class="col-md-3 mb-3">
          <?php if ($officer['photo_url']): ?>
          <img src="<?php echo esc_attr($officer['photo_url']); ?>" alt="<?php echo esc_attr($officer['name']); ?>" class="img-fluid img-thumbnail mb-3" /><br />
          <?php endif ;?>
          <strong><?php echo __($officer['name']); ?></strong><br />
          <?php echo __($officer['title']); ?>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</div>
<?php endif; ?>
```
