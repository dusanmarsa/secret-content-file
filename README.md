# Create File Action

<img 
    alt="GitHub Actions Test Status" 
    src="https://github.com/dusanmarsa/secret-content-file/actions/workflows/test.yml/badge.svg?branch=master"
/>

This action takes 3 keys **CONTENT**, **FILE_NAME** and **DIRECTORY** and create file with them. 
File can take content in form of plain string or by providing secret. 
If Secret is multiline then content of the file will be also multiline.

## Example

```yaml
uses: dusanmarsa/secret-content-file@master
with:
    CONTENT: 'some text as content'
    FILE_NAME: 'file.txt'
    DIRECTORY: 'a/b/c/d
```