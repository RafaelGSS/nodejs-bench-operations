## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|838,028,717|99|
|Setter|11,425,951|98|
|Method|841,289,750|98|
|DefineProperty (setter)|841,642,285|96|
|DefineProperty (setter & enumerable=false)|11,232,954|95|
|DefineProperty (setter & configurable=false)|11,122,589|98|
|DefineProperty (setter & enumerable=false & configurable=false)|11,109,111|98|
|DefineProperty (writable)|847,160,462|98|
|DefineProperty (writable & enumerable=false)|213,601,049|26|
|DefineProperty (writable & enumerable=false & configurable=false)|152,105,410|81|
|DefineProperties (setter)|123,989,912|87|
|DefineProperties (setter & enumerable=false)|11,156,471|97|
|DefineProperties (setter & enumerable=false & configurable=false)|10,853,050|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:17:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":838028716.6509466,"samples":6},{"name":"Setter","opsSec":11425951.35223477,"samples":6},{"name":"Method","opsSec":841289750.3783615,"samples":6},{"name":"DefineProperty (setter)","opsSec":841642285.1537042,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11232954.424105458,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":11122589.320964811,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11109110.795660002,"samples":6},{"name":"DefineProperty (writable)","opsSec":847160462.3242965,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":213601049.4860266,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":152105409.5980664,"samples":7},{"name":"DefineProperties (setter)","opsSec":123989912.00001241,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11156470.840748258,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10853049.504755002,"samples":5}]}-->
