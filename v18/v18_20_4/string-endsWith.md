## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|61,873,916|30957415|
|(short string) (true) String#slice and strict comparison|50,613,437|25311164|
|(long string) (true) String#endsWith|50,056,527|25028272|
|(long string) (true) String#slice and strict comparison|44,735,699|22367862|
|(short string) (false) String#endsWith|57,637,746|28826061|
|(short string) (false) String#slice and strict comparison|59,446,264|29723134|
|(long string) (false) String#endsWith|54,326,819|27163726|
|(long string) (false) String#slice and strict comparison|51,886,201|25943104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:37:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":61873916.12046101,"samples":30957415},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50613437.74965927,"samples":25311164},{"name":"(long string) (true) String#endsWith","opsSec":50056527.48134593,"samples":25028272},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44735699.03747994,"samples":22367862},{"name":"(short string) (false) String#endsWith","opsSec":57637746.339134574,"samples":28826061},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59446264.19543909,"samples":29723134},{"name":"(long string) (false) String#endsWith","opsSec":54326819.52716706,"samples":27163726},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51886201.35856623,"samples":25943104}]}-->
