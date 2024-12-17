# ServerConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_port** | **int** |  | 
**binaries_path** | **str** |  | 
**build_image_namespace** | **str** |  | [optional] 
**builder_image** | **str** |  | 
**builder_registry_server** | **str** |  | 
**default_project_image** | **str** |  | 
**default_project_user** | **str** |  | 
**frps** | [**FRPSConfig**](FRPSConfig.md) |  | [optional] 
**headscale_port** | **int** |  | 
**id** | **str** |  | 
**local_builder_registry_image** | **str** |  | 
**local_builder_registry_port** | **int** |  | 
**log_file** | [**LogFileConfig**](LogFileConfig.md) |  | 
**providers_dir** | **str** |  | 
**registry_url** | **str** |  | 
**samples_index_url** | **str** |  | [optional] 
**server_download_url** | **str** |  | 

## Example

```python
from api_client.models.server_config import ServerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServerConfig from a JSON string
server_config_instance = ServerConfig.from_json(json)
# print the JSON string representation of the object
print(ServerConfig.to_json())

# convert the object into a dict
server_config_dict = server_config_instance.to_dict()
# create an instance of ServerConfig from a dict
server_config_from_dict = ServerConfig.from_dict(server_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


