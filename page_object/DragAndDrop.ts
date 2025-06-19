import { expect, Locator, Page } from "@playwright/test";


export class DragAndDrop {

    private readonly page: Page;
    private readonly dragEl: Locator
    private readonly dropZone: Locator;
    private readonly dropList: Locator;
    constructor(page: Page) {
        this.page = page;
        this.dragEl = page.locator('[draggable="true"]');
        this.dropZone = page.locator('[id="mydropzone"]');
        this.dropList = page.locator('[id="droppedlist"]');
    }
    /**
     * 
     * @param text - Text content of the element to dragg
     */
    public async dragAndDropElement(text: string): Promise<void> {
       const dragSource = this.dragEl.filter({ hasText: text });
       await dragSource.dragTo(this.dropZone);
       await this.verifyDrop(text)
    }
     /**
     * 
     * @param text - Text content of the element to dragg
     */

    public async dragAndDropElementOption2(text: string): Promise<void> {
        const dragSource = this.dragEl.filter({ hasText: text });
        await dragSource.hover();
        await this.page.mouse.down();
        await this.dropZone.hover();
        await this.page.mouse.up();
        await this.verifyDrop(text);
    }
    /**
     * 
     * @param text - text content of the element to verify in the drop list
     */
    public async verifyDrop(text: string) {
        const dropListText = await this.dropList.textContent();
        expect (dropListText).toContain(text);

}
}