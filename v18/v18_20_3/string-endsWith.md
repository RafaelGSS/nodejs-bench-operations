## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|62,296,539|31148371|
|(short string) (true) String#slice and strict comparison|50,204,604|25108254|
|(long string) (true) String#endsWith|50,463,353|25233631|
|(long string) (true) String#slice and strict comparison|43,890,681|21951406|
|(short string) (false) String#endsWith|57,573,107|28786621|
|(short string) (false) String#slice and strict comparison|58,728,764|29379510|
|(long string) (false) String#endsWith|55,951,027|27975609|
|(long string) (false) String#slice and strict comparison|50,849,407|25425324|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:44:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":62296539.28706117,"samples":31148371},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50204604.990202874,"samples":25108254},{"name":"(long string) (true) String#endsWith","opsSec":50463353.00774932,"samples":25233631},{"name":"(long string) (true) String#slice and strict comparison","opsSec":43890681.75672017,"samples":21951406},{"name":"(short string) (false) String#endsWith","opsSec":57573107.624366805,"samples":28786621},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58728764.35009718,"samples":29379510},{"name":"(long string) (false) String#endsWith","opsSec":55951027.20699723,"samples":27975609},{"name":"(long string) (false) String#slice and strict comparison","opsSec":50849407.884640515,"samples":25425324}]}-->
