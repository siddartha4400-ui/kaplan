<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TinyMCE Test</title>
</head>
<body>
    <h2>Editor</h2>
    <textarea id="editor"></textarea>

    <!-- Local TinyMCE Script -->
    <script src="{{ asset('tinymce/js/tinymce/tinymce.min.js') }}"></script>

    <script>
        tinymce.init({
            selector: '#editor',
            plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen table media emoticons template paste code help wordcount',
            toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link image | table | media | emoticons | code | fullscreen | preview',
            toolbar_mode: 'floating',  // Makes the toolbar float above the editor
            menubar: true,  // Adds the menu bar (File, Edit, etc.)
            statusbar: true,  // Shows the status bar at the bottom
            height: 400,  // Sets the editor's height
            branding: false,  // Hides the TinyMCE branding
            paste_data_images: true,  // Allows pasting images directly into the editor
            content_style: 'body { font-family: Arial, sans-serif; font-size: 14px; }', // Customizes the font style
            image_advtab: true,  // Shows the "Advanced" tab in the image dialog box
            file_picker_callback: function(callback, value, meta) {
                // Custom file picker callback, if needed
                if (meta.filetype == 'image') {
                    var input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');
                    input.onchange = function() {
                        var file = this.files[0];
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            callback(e.target.result, { alt: file.name });
                        };
                        reader.readAsDataURL(file);
                    };
                    input.click();
                }
            }
        });
    </script>
</body>
</html>
