## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|60,781,583|30393948|
|(short string) (true) String#slice and strict comparison|62,257,886|31192438|
|(long string) (true) String#endsWith|50,706,984|25353612|
|(long string) (true) String#slice and strict comparison|57,912,311|28956167|
|(short string) (false) String#endsWith|58,838,037|29419372|
|(short string) (false) String#slice and strict comparison|55,785,384|27901985|
|(long string) (false) String#endsWith|55,546,925|27773539|
|(long string) (false) String#slice and strict comparison|57,224,671|28612347|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:46:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":60781583.22476627,"samples":30393948},{"name":"(short string) (true) String#slice and strict comparison","opsSec":62257886.22366991,"samples":31192438},{"name":"(long string) (true) String#endsWith","opsSec":50706984.05455145,"samples":25353612},{"name":"(long string) (true) String#slice and strict comparison","opsSec":57912311.182549395,"samples":28956167},{"name":"(short string) (false) String#endsWith","opsSec":58838037.11982205,"samples":29419372},{"name":"(short string) (false) String#slice and strict comparison","opsSec":55785384.54128622,"samples":27901985},{"name":"(long string) (false) String#endsWith","opsSec":55546925.801423304,"samples":27773539},{"name":"(long string) (false) String#slice and strict comparison","opsSec":57224671.56792875,"samples":28612347}]}-->
