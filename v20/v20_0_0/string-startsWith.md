## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,149,881|7574941|
|(short string) (true) String#slice and strict comparison|15,908,517|7954259|
|(long string) (true) String#startsWith|14,761,992|7380997|
|(long string) (true) String#slice and strict comparison|15,977,048|7988525|
|(short string) (false) String#startsWith|15,592,396|7796199|
|(short string) (false) String#slice and strict comparison|15,846,341|7923171|
|(long string) (false) String#startsWith|15,499,464|7749733|
|(long string) (false) String#slice and strict comparison|15,948,603|7974302|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:32:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15149881.270373339,"samples":7574941},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15908517.651054472,"samples":7954259},{"name":"(long string) (true) String#startsWith","opsSec":14761992.113530213,"samples":7380997},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15977048.986746063,"samples":7988525},{"name":"(short string) (false) String#startsWith","opsSec":15592396.289942196,"samples":7796199},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15846341.22927532,"samples":7923171},{"name":"(long string) (false) String#startsWith","opsSec":15499464.40360436,"samples":7749733},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15948603.254721107,"samples":7974302}]}-->
