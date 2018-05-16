<div class="wrap">
<h1><span class="dashicons dashicons-groups" style="vertical-align:middle;"></span> Manage Chapter Officers</h1>
<br />
<form>
    <div class="postbox">
      <div class="inside">
        <table class="form-table">
          <tr valign="top">
          <th scope="row">Heading</th>
          <td><input type="text" class="large-text chapter-officers-heading" name="title" /></td>
          </tr>
        </table>
      </div>
      <div class="chapter-officers-items"></div>
    </div>
    <div class="alignright">
      <button type="button" class="button button-secondary chapter-officer-row-add">Add Officer</button>
    </div>
    <?php submit_button(); ?>
</form>
</div>

<script type="text/javascript">
var chapter_officers = <?php echo(json_encode(get_option('chapter_officers'))); ?>;
</script>
