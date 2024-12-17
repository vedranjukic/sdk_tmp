# FileInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | **str** |  | 
**is_dir** | **bool** |  | 
**mod_time** | **str** |  | 
**mode** | **str** |  | 
**name** | **str** |  | 
**owner** | **str** |  | 
**permissions** | **str** |  | 
**size** | **int** |  | 

## Example

```python
from api_client.models.file_info import FileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FileInfo from a JSON string
file_info_instance = FileInfo.from_json(json)
# print the JSON string representation of the object
print(FileInfo.to_json())

# convert the object into a dict
file_info_dict = file_info_instance.to_dict()
# create an instance of FileInfo from a dict
file_info_from_dict = FileInfo.from_dict(file_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


