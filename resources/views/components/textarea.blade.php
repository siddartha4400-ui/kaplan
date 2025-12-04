<div class="form-group">
    <label for="{{ $id }}">{{ $label }}</label>
    <textarea
        id="{{ $id }}"
        name="{{ $name }}"
        rows="{{ $rows }}"
        cols="{{ $cols }}"
        class="form-control {{ $errors->has($name) ? 'is-invalid' : '' }}"
        {{ $attributes }}>
        {{ old($name, $value ?? '') }}
    </textarea>
    @error($name)
        <div class="invalid-feedback">{{ $message }}</div>
    @enderror
</div>
