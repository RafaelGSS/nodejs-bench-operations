## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|120,367,595|60183839|
|(short string) (true) String#slice and strict comparison|50,729,438|25364735|
|(long string) (true) String#endsWith|54,514,262|27257138|
|(long string) (true) String#slice and strict comparison|45,254,800|22628249|
|(short string) (false) String#endsWith|95,741,721|47870907|
|(short string) (false) String#slice and strict comparison|50,373,874|25187483|
|(long string) (false) String#endsWith|86,682,288|43341152|
|(long string) (false) String#slice and strict comparison|44,821,489|22411816|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:47:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":120367595.90929958,"samples":60183839},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50729438.04045404,"samples":25364735},{"name":"(long string) (true) String#endsWith","opsSec":54514262.153377414,"samples":27257138},{"name":"(long string) (true) String#slice and strict comparison","opsSec":45254800.0399025,"samples":22628249},{"name":"(short string) (false) String#endsWith","opsSec":95741721.13053049,"samples":47870907},{"name":"(short string) (false) String#slice and strict comparison","opsSec":50373874.29739623,"samples":25187483},{"name":"(long string) (false) String#endsWith","opsSec":86682288.39718808,"samples":43341152},{"name":"(long string) (false) String#slice and strict comparison","opsSec":44821489.263884254,"samples":22411816}]}-->
