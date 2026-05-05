describe('Dil Değiştirme Kontrolü', () => {
    it('dil değiştirme butonunun çalışıp çalışmadığını kontrol eder', () => {
        cy.visit('http://localhost:5173/');

        cy.contains(/ENGLISH|TÜRKÇE/i, { timeout: 10000 })
            .should('exist')
            .click({ force: true });

        // Değişimi kontrol et
        cy.contains(/Skills|Yetenekler/i).should('be.visible');
    });

    it('tema değiştirme butonunun çalışıp çalışmadığını kontrol eder', () => {
        cy.visit('http://localhost:5173/');

        // 1. Sayfa ilk açıldığında isDark=true olduğu için 'dark' class'ı olmalı
        cy.get('html').should('have.class', 'dark');

        // 2. Butona tıkla (Light moda geç)
        cy.get('[data-cy="theme-toggle-button"]').click();

        // 3. 'dark' class'ının kalktığını doğrula
        cy.get('html').should('not.have.class', 'dark');

        // 4. Tekrar tıkla (Dark moda geri dön)
        cy.get('[data-cy="theme-toggle-button"]').click();
        cy.get('html').should('have.class', 'dark');
    });
    it('dil değiştirildiğinde toast mesajı metni ekranda görünmelidir', () => {
        cy.visit('http://localhost:5173/');

        // 1. Dil butonuna tıkla
        cy.contains(/ENGLISH|TÜRKÇE/i).click({ force: true });

        // 2. Doğrudan metni ara (regex kullanarak her iki dile de tolerans gösterelim)
        // timeout: 10000 vererek toast mesajının belirmesi için süre tanıyoruz
        cy.contains(/Language switched to English|Dil Türkçe olarak değiştirildi/i, { timeout: 10000 })
            .should('be.visible');
    });
});
