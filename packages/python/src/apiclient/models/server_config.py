# coding: utf-8

"""
    Daytona Server API

    Daytona Server API

    The version of the OpenAPI document: v0.0.0-dev
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from apiclient.models.frps_config import FRPSConfig
from apiclient.models.log_file_config import LogFileConfig
from typing import Optional, Set
from typing_extensions import Self

class ServerConfig(BaseModel):
    """
    ServerConfig
    """ # noqa: E501
    api_port: StrictInt = Field(alias="apiPort")
    binaries_path: StrictStr = Field(alias="binariesPath")
    build_image_namespace: Optional[StrictStr] = Field(default=None, alias="buildImageNamespace")
    builder_image: StrictStr = Field(alias="builderImage")
    builder_registry_server: StrictStr = Field(alias="builderRegistryServer")
    default_project_image: StrictStr = Field(alias="defaultProjectImage")
    default_project_user: StrictStr = Field(alias="defaultProjectUser")
    frps: Optional[FRPSConfig] = None
    headscale_port: StrictInt = Field(alias="headscalePort")
    id: StrictStr
    local_builder_registry_image: StrictStr = Field(alias="localBuilderRegistryImage")
    local_builder_registry_port: StrictInt = Field(alias="localBuilderRegistryPort")
    log_file: LogFileConfig = Field(alias="logFile")
    providers_dir: StrictStr = Field(alias="providersDir")
    registry_url: StrictStr = Field(alias="registryUrl")
    samples_index_url: Optional[StrictStr] = Field(default=None, alias="samplesIndexUrl")
    server_download_url: StrictStr = Field(alias="serverDownloadUrl")
    __properties: ClassVar[List[str]] = ["apiPort", "binariesPath", "buildImageNamespace", "builderImage", "builderRegistryServer", "defaultProjectImage", "defaultProjectUser", "frps", "headscalePort", "id", "localBuilderRegistryImage", "localBuilderRegistryPort", "logFile", "providersDir", "registryUrl", "samplesIndexUrl", "serverDownloadUrl"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of ServerConfig from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of frps
        if self.frps:
            _dict['frps'] = self.frps.to_dict()
        # override the default output from pydantic by calling `to_dict()` of log_file
        if self.log_file:
            _dict['logFile'] = self.log_file.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ServerConfig from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "apiPort": obj.get("apiPort"),
            "binariesPath": obj.get("binariesPath"),
            "buildImageNamespace": obj.get("buildImageNamespace"),
            "builderImage": obj.get("builderImage"),
            "builderRegistryServer": obj.get("builderRegistryServer"),
            "defaultProjectImage": obj.get("defaultProjectImage"),
            "defaultProjectUser": obj.get("defaultProjectUser"),
            "frps": FRPSConfig.from_dict(obj["frps"]) if obj.get("frps") is not None else None,
            "headscalePort": obj.get("headscalePort"),
            "id": obj.get("id"),
            "localBuilderRegistryImage": obj.get("localBuilderRegistryImage"),
            "localBuilderRegistryPort": obj.get("localBuilderRegistryPort"),
            "logFile": LogFileConfig.from_dict(obj["logFile"]) if obj.get("logFile") is not None else None,
            "providersDir": obj.get("providersDir"),
            "registryUrl": obj.get("registryUrl"),
            "samplesIndexUrl": obj.get("samplesIndexUrl"),
            "serverDownloadUrl": obj.get("serverDownloadUrl")
        })
        return _obj

