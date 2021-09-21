const DEEP_PATHS = [
    'components/button',
    'components/group',
    'components/link',
    'components/primitive-textfield',
    'components/notification',
    'components/primitive-checkbox',
];

const toggleExclusions: Record<string, ReadonlyArray<number>> = {
    'components/button': [1],
};

const selectExclusions: Record<string, ReadonlyArray<number>> = {
    'components/primitive-textfield': [0, 7, 8, 9, 10],
};

describe('Deep', () => {
    beforeEach(() => {
        cy.viewport(1500, 3200);
    });

    DEEP_PATHS.forEach(path => {
        let counter = 1;

        it(path, () => {
            cy.goToDemoPage(`/${path}/API`);

            cy.get('[tuidocheader]').invoke(
                'attr',
                'style',
                'position: absolute !important',
            );

            cy.get(`.tui-table tui-select`).each((sample, index) => {
                if (selectExclusions[path] && selectExclusions[path].includes(index)) {
                    return cy.wrap(sample);
                }

                return cy
                    .wrap(sample)
                    .click()
                    .get(`[tuioption]`)
                    .each((_, index) => {
                        if (index === 0) {
                            cy.wrap(sample).click();

                            return;
                        }

                        return cy
                            .wrap(sample)
                            .click()
                            .get(`[tuioption]`)
                            .eq(index)
                            .click()
                            .get(`#demoContent`)
                            .first()
                            .wait(200)
                            .matchImageSnapshot(`${path}/${counter++}`);
                    })
                    .wrap(sample)
                    .click()
                    .get(`[tuioption]`)
                    .first()
                    .click();
            });

            cy.get(`.tui-table tui-toggle`).each((sample, index) => {
                if (toggleExclusions[path] && toggleExclusions[path].includes(index)) {
                    return cy.wrap(sample);
                }

                return cy
                    .wrap(sample)
                    .click()
                    .get(`#demoContent`)
                    .first()
                    .wait(200)
                    .matchImageSnapshot(`${path}/${counter++}`);
            });
        });
    });
});
