## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,275,484|7137743|
|(short string) (true) String#slice and strict comparison|16,425,890|8212946|
|(long string) (true) String#endsWith|13,852,897|6926449|
|(long string) (true) String#slice and strict comparison|17,084,436|8542219|
|(short string) (false) String#endsWith|14,683,023|7341512|
|(short string) (false) String#slice and strict comparison|17,215,211|8607606|
|(long string) (false) String#endsWith|14,542,841|7271421|
|(long string) (false) String#slice and strict comparison|17,094,014|8547008|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:31:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14275484.2143643,"samples":7137743},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16425890.5428537,"samples":8212946},{"name":"(long string) (true) String#endsWith","opsSec":13852897.765863279,"samples":6926449},{"name":"(long string) (true) String#slice and strict comparison","opsSec":17084436.853699148,"samples":8542219},{"name":"(short string) (false) String#endsWith","opsSec":14683023.656329162,"samples":7341512},{"name":"(short string) (false) String#slice and strict comparison","opsSec":17215211.89815892,"samples":8607606},{"name":"(long string) (false) String#endsWith","opsSec":14542841.163138615,"samples":7271421},{"name":"(long string) (false) String#slice and strict comparison","opsSec":17094014.423151728,"samples":8547008}]}-->
