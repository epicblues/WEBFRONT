 if (name === null) {
            name = "Anonymous"
        }
        document.writeln("<p>Welcome, " + name + "</p>");
        let result = confirm("준비 되셨습니까?") // 서용자 선택
        if (result) {
            alert("한번 실행히 봅시다.")
        }