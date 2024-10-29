## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|120,955,422|60477730|
|(short string) (true) String#slice and strict comparison|56,906,337|28453256|
|(long string) (true) String#endsWith|64,896,681|32458096|
|(long string) (true) String#slice and strict comparison|51,932,071|25969623|
|(short string) (false) String#endsWith|95,422,057|47711038|
|(short string) (false) String#slice and strict comparison|56,876,948|28440136|
|(long string) (false) String#endsWith|87,536,997|43826802|
|(long string) (false) String#slice and strict comparison|51,255,867|25640503|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:49:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":120955422.01999749,"samples":60477730},{"name":"(short string) (true) String#slice and strict comparison","opsSec":56906337.63898148,"samples":28453256},{"name":"(long string) (true) String#endsWith","opsSec":64896681.0724223,"samples":32458096},{"name":"(long string) (true) String#slice and strict comparison","opsSec":51932071.37661103,"samples":25969623},{"name":"(short string) (false) String#endsWith","opsSec":95422057.29727677,"samples":47711038},{"name":"(short string) (false) String#slice and strict comparison","opsSec":56876948.33864688,"samples":28440136},{"name":"(long string) (false) String#endsWith","opsSec":87536997.36640018,"samples":43826802},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51255867.04744791,"samples":25640503}]}-->
