## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|55,324,574|27700307|
|(short string) (true) String#slice and strict comparison|52,285,609|26169898|
|(long string) (true) String#endsWith|44,534,818|22267419|
|(long string) (true) String#slice and strict comparison|47,394,431|23733677|
|(short string) (false) String#endsWith|56,760,214|28380617|
|(short string) (false) String#slice and strict comparison|53,792,694|26944377|
|(long string) (false) String#endsWith|52,281,804|26141052|
|(long string) (false) String#slice and strict comparison|47,366,498|23685367|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:47:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":55324574.46641443,"samples":27700307},{"name":"(short string) (true) String#slice and strict comparison","opsSec":52285609.07703449,"samples":26169898},{"name":"(long string) (true) String#endsWith","opsSec":44534818.85002789,"samples":22267419},{"name":"(long string) (true) String#slice and strict comparison","opsSec":47394431.50585215,"samples":23733677},{"name":"(short string) (false) String#endsWith","opsSec":56760214.927101195,"samples":28380617},{"name":"(short string) (false) String#slice and strict comparison","opsSec":53792694.55637906,"samples":26944377},{"name":"(long string) (false) String#endsWith","opsSec":52281804.843512684,"samples":26141052},{"name":"(long string) (false) String#slice and strict comparison","opsSec":47366498.20353165,"samples":23685367}]}-->
